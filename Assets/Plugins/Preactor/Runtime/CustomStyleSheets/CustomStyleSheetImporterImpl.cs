using ExCSS;
using Preactor.CustomStyleSheets.Structs;
using System.Linq;
using System.Text;
using UnityEngine;
using StyleSheet = UnityEngine.UIElements.StyleSheet;

namespace Preactor.CustomStyleSheets {
    public class CustomStyleSheetImporterImpl : StyleValueImporter {
        public void BuildStyleSheet(StyleSheet asset, string contents) {
            var styleSheet = m_Parser.Parse(contents);
            ImportParserStyleSheet(asset, styleSheet);

            var hash = new Hash128();
            var bytes = Encoding.UTF8.GetBytes(contents);
            if (bytes.Length != 0) {
                HashUtilities.ComputeHash128(bytes, ref hash);
            }

            asset.contentHash = hash.GetHashCode();
        }

        void VisitSheet(ExCSS.StyleSheet styleSheet) {
            foreach (var styleRule in styleSheet.StyleRules) {
                m_Builder.BeginRule(styleRule.Line);
                m_CurrentLine = styleRule.Line;
                VisitBaseSelector(styleRule.Selector);

                foreach (var declaration in styleRule.Declarations) {
                    m_CurrentLine = declaration.Line;
                    ValidateProperty(declaration);
                    m_Builder.BeginProperty(declaration.Name, declaration.Line);
                    VisitValue(declaration.Term);
                    m_Builder.EndProperty();
                }

                m_Builder.EndRule();
            }
        }

        void VisitBaseSelector(BaseSelector selector) {
            switch (selector) {
                case AggregateSelectorList selectorList:
                    VisitSelectorList(selectorList);
                    break;
                case ComplexSelector complexSelector:
                    VisitComplexSelector(complexSelector);
                    break;
                case SimpleSelector simpleSelector:
                    VisitSimpleSelector(simpleSelector.ToString());
                    break;
            }
        }

        void VisitSelectorList(AggregateSelectorList selectorList) {
            if (selectorList.Delimiter == ",") {
                foreach (var selector in selectorList) {
                    VisitBaseSelector(selector);
                }
            } else if (selectorList.Delimiter == string.Empty) {
                VisitSimpleSelector(selectorList.ToString());
            } else {
                m_Errors.AddSemanticError(
                    StyleSheetImportErrorCode.InvalidSelectorListDelimiter,
                    string.Format(
                        glossary.invalidSelectorListDelimiter,
                        selectorList.Delimiter
                    ),
                    m_CurrentLine
                );
            }
        }

        void VisitSimpleSelector(string selector) {
            if (!CheckSimpleSelector(selector, out var parts)) {
                return;
            }

            var selectorSpecificity = CSSSpec.GetSelectorSpecificity(parts);
            if (selectorSpecificity == 0) {
                m_Errors.AddInternalError(
                    string.Format(
                        glossary.internalError,
                        "Failed to calculate selector specificity " + selector
                    ),
                    m_CurrentLine
                );
            } else {
                using (m_Builder.BeginComplexSelector(selectorSpecificity)) {
                    m_Builder.AddSimpleSelector(parts, StyleSelectorRelationship.None);
                }
            }
        }

        void VisitComplexSelector(ComplexSelector complexSelector) {
            var selectorSpecificity = CSSSpec.GetSelectorSpecificity(complexSelector.ToString());
            if (selectorSpecificity == 0) {
                m_Errors.AddInternalError(
                    string.Format(
                        glossary.internalError,
                        "Failed to calculate selector specificity " + complexSelector
                    ),
                    m_CurrentLine
                );
            } else {
                using (m_Builder.BeginComplexSelector(selectorSpecificity)) {
                    var prevRelationship = StyleSelectorRelationship.None;
                    foreach (var combinatorSelector in complexSelector) {
                        var simpleSelector = ExtractSimpleSelector(combinatorSelector.Selector);

                        if (string.IsNullOrEmpty(simpleSelector)) {
                            m_Errors.AddInternalError(
                                string.Format(
                                    glossary.internalError,
                                    "Expected simple selector inside complex selector " + simpleSelector
                                ),
                                m_CurrentLine
                            );
                            break;
                        }

                        if (!CheckSimpleSelector(simpleSelector, out var parts)) {
                            break;
                        }

                        m_Builder.AddSimpleSelector(parts, prevRelationship);
                        switch (combinatorSelector.Delimiter) {
                            case Combinator.Child:
                                prevRelationship = StyleSelectorRelationship.Child;
                                break;
                            case Combinator.Descendent:
                                prevRelationship = StyleSelectorRelationship.Descendent;
                                break;
                            default:
                                m_Errors.AddSemanticError(
                                    StyleSheetImportErrorCode.InvalidComplexSelectorDelimiter,
                                    string.Format(
                                        glossary.invalidComplexSelectorDelimiter,
                                        complexSelector
                                    ),
                                    m_CurrentLine
                                );
                                return;
                        }
                    }
                }
            }
        }

        bool CheckSimpleSelector(string selector, out StyleSelectorPart[] parts) {
            if (!CSSSpec.ParseSelector(selector, out parts)) {
                m_Errors.AddSemanticError(
                    StyleSheetImportErrorCode.UnsupportedSelectorFormat,
                    string.Format(glossary.unsupportedSelectorFormat, selector),
                    m_CurrentLine
                );
                return false;
            }

            if (parts.Any(p => p.type == StyleSelectorType.Unknown)) {
                m_Errors.AddSemanticError(
                    StyleSheetImportErrorCode.UnsupportedSelectorFormat,
                    string.Format(glossary.unsupportedSelectorFormat, selector),
                    m_CurrentLine
                );
                return false;
            }

            if (parts.All(p => p.type != StyleSelectorType.RecursivePseudoClass)) {
                return true;
            }

            m_Errors.AddSemanticError(
                StyleSheetImportErrorCode.RecursiveSelectorDetected,
                string.Format(glossary.unsupportedSelectorFormat, selector),
                m_CurrentLine
            );
            return false;
        }

        void ValidateProperty(Property property) {
            if (disableValidation) {
                return;
            }

            var name = property.Name;
            var str = property.Term.ToString();
            var validationResult = m_Validator.ValidateProperty(name, str);
            if (!validationResult.success) {
                var message = validationResult.message + "\n    " + name + ": " + str;
                if (!string.IsNullOrEmpty(validationResult.hint)) {
                    message = message + " -> " + validationResult.hint;
                }

                m_Errors.AddValidationWarning(message, property.Line);
            }
        }

        string ExtractSimpleSelector(BaseSelector selector) {
            int num;
            switch (selector) {
                case SimpleSelector _:
                    return selector.ToString();
                case AggregateSelectorList aggregateSelectorList:
                    num = aggregateSelectorList.Delimiter == string.Empty ? 1 : 0;
                    break;
                default:
                    num = 0;
                    break;
            }

            return num != 0 ? selector.ToString() : string.Empty;
        }

        void ImportParserStyleSheet(StyleSheet asset, ExCSS.StyleSheet styleSheet) {
            m_Errors.assetPath = assetPath;
            if (styleSheet.Errors.Count > 0) {
                foreach (var error in styleSheet.Errors) {
                    m_Errors.AddSyntaxError(string.Format(glossary.ussParsingError, error.Message), error.Line);
                }
            } else {
                VisitSheet(styleSheet);
            }

            var hasErrors = m_Errors.hasErrors;
            if (!hasErrors) {
                m_Builder.BuildTo(asset);
            }
        }
    }
}
