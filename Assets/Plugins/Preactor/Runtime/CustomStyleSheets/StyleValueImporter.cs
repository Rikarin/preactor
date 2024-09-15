using ExCSS;
using Preactor.CustomStyleSheets.Structs;
using Preactor.CustomStyleSheets.Wrappers;
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using Object = UnityEngine.Object;

namespace Preactor.CustomStyleSheets {
    public enum URIValidationResult {
        OK,
        InvalidURILocation,
        InvalidURIScheme,
        InvalidURIProjectAssetPath
    }

    public abstract class StyleValueImporter {
        const string k_ResourcePathFunctionName = "resource";
        const string k_VariableFunctionName = "var";

        static StyleSheetImportGlossary s_Glossary;
#pragma warning disable 414
        static readonly string kThemePrefix = "unity-theme://";
#pragma warning restore 414
        static Dictionary<string, StyleValueKeyword> s_NameCache;

        protected readonly Parser m_Parser;
        protected readonly StyleSheetBuilderWrapper m_Builder;
        protected readonly StyleSheetImportErrors m_Errors;
        protected readonly StyleValidatorWrapper m_Validator;
        protected string m_AssetPath;
        protected int m_CurrentLine;

        public bool disableValidation { get; set; }

        public StyleSheetImportErrors importErrors => m_Errors;

        public string assetPath => m_AssetPath;

        internal static StyleSheetImportGlossary glossary => s_Glossary ??= new();

        public StyleValueImporter() {
            m_AssetPath = null;
            m_Parser = new();
            m_Builder = new();
            m_Errors = new();
            m_Validator = new();
        }

        public static StyleValueFunction FromUssString(string ussValue) {
            ussValue = ussValue.ToLower();
            var str = ussValue;
            if (str == "var") {
                return StyleValueFunction.Var;
            }

            if (str == "env") {
                return StyleValueFunction.Env;
            }

            if (str == "linear-gradient") {
                return StyleValueFunction.LinearGradient;
            }

            throw new ArgumentOutOfRangeException(nameof(ussValue), ussValue, "Unknown function name");
        }

        static (StyleSheetImportErrorCode, string) ConvertErrorCode(
            URIValidationResult result
        ) {
            switch (result) {
                case URIValidationResult.InvalidURILocation:
                    return (StyleSheetImportErrorCode.InvalidURILocation,
                        glossary.invalidUriLocation);
                case URIValidationResult.InvalidURIScheme:
                    return (StyleSheetImportErrorCode.InvalidURIScheme, glossary.invalidUriScheme);
                case URIValidationResult.InvalidURIProjectAssetPath:
                    return (StyleSheetImportErrorCode.InvalidURIProjectAssetPath,
                        glossary.invalidAssetPath);
                default:
                    return (StyleSheetImportErrorCode.Internal,
                        glossary.internalErrorWithStackTrace);
            }
        }

        bool ValidateFunction(GenericFunction term, out StyleValueFunction func) {
            func = StyleValueFunction.Unknown;
            if (term.Arguments.Length == 0) {
                m_Errors.AddSemanticError(
                    StyleSheetImportErrorCode.MissingFunctionArgument,
                    string.Format(glossary.missingFunctionArgument, term.Name),
                    m_CurrentLine
                );
                return false;
            }

            if (term.Name == "var") {
                func = StyleValueFunction.Var;
                return ValidateVarFunction(term);
            }

            func = FromUssString(term.Name);
            return true;
        }

        bool ValidateVarFunction(GenericFunction term) {
            var length = term.Arguments.Length;
            var term1 = term.Arguments[0];
            var flag1 = false;
            var flag2 = false;
            for (var index = 0; index < length; ++index) {
                var term2 = term.Arguments[index];
                if (!(term2.GetType() == typeof(Whitespace))) {
                    if (!flag1) {
                        var str = (term.Arguments[index] is PrimitiveTerm primitiveTerm
                            ? primitiveTerm.Value
                            : null) as string;
                        if (string.IsNullOrEmpty(str)) {
                            m_Errors.AddSemanticError(
                                StyleSheetImportErrorCode.InvalidVarFunction,
                                glossary.missingVariableName,
                                m_CurrentLine
                            );
                            return false;
                        }

                        if (!str.StartsWith("--")) {
                            m_Errors.AddSemanticError(
                                StyleSheetImportErrorCode.InvalidVarFunction,
                                string.Format(glossary.missingVariablePrefix, str),
                                m_CurrentLine
                            );
                            return false;
                        }

                        if (str.Length < 3) {
                            m_Errors.AddSemanticError(
                                StyleSheetImportErrorCode.InvalidVarFunction,
                                glossary.emptyVariableName,
                                m_CurrentLine
                            );
                            return false;
                        }

                        flag1 = true;
                    } else if (term2.GetType() == typeof(Comma)) {
                        if (flag2) {
                            m_Errors.AddSemanticError(
                                StyleSheetImportErrorCode.InvalidVarFunction,
                                glossary.tooManyFunctionArguments,
                                m_CurrentLine
                            );
                            return false;
                        }

                        flag2 = true;
                        ++index;
                        if (index >= length) {
                            m_Errors.AddSemanticError(
                                StyleSheetImportErrorCode.InvalidVarFunction,
                                glossary.emptyFunctionArgument,
                                m_CurrentLine
                            );
                            return false;
                        }
                    } else if (!flag2) {
                        var str = "";
                        while (term2.GetType() == typeof(Whitespace) && index + 1 < length) {
                            term2 = term.Arguments[++index];
                        }

                        if (term2.GetType() != typeof(Whitespace)) {
                            str = term2.ToString();
                        }

                        m_Errors.AddSemanticError(
                            StyleSheetImportErrorCode.InvalidVarFunction,
                            string.Format(glossary.unexpectedTokenInFunction, str),
                            m_CurrentLine
                        );
                        return false;
                    }
                }
            }

            return true;
        }

        static bool TryParseKeyword(string rawStr, out StyleValueKeyword value) {
            if (s_NameCache == null) {
                s_NameCache = new();
                foreach (StyleValueKeyword styleValueKeyword in Enum.GetValues(typeof(StyleValueKeyword))) {
                    s_NameCache[styleValueKeyword.ToString().ToLower()] = styleValueKeyword;
                }
            }

            return s_NameCache.TryGetValue(rawStr.ToLower(), out value);
        }

        struct StoredAsset {
            public Object resource;

            public ScalableImage si;

            public int index;
        }

        protected void VisitResourceFunction(GenericFunction funcTerm) {
            var obj = funcTerm.Arguments.FirstOrDefault();
            var val = (PrimitiveTerm)(obj is PrimitiveTerm ? obj : null);
            if (val == null) {
                m_Errors.AddSemanticError(
                    StyleSheetImportErrorCode.MissingFunctionArgument,
                    funcTerm.Name,
                    m_CurrentLine
                );
                return;
            }

            var value = val.Value as string;
            m_Builder.AddValue(value, StyleValueType.ResourcePath);
        }

        protected void VisitUrlFunction(PrimitiveTerm term) {
            var path = (string)term.Value;
            // var workingDir = _scriptEngine.WorkingDir;
            // var fullpath = Path.Combine(workingDir, path);

            // TODO: refactor to use addressables
            throw new NotImplementedException();

            // if (File.Exists(fullpath)) {
            //     // test path ends in .jpg or .png
            //     if (path.EndsWith(".jpg") || path.EndsWith(".png")) {
            //         Texture2D tex = new Texture2D(2, 2);
            //         tex.LoadImage(File.ReadAllBytes(fullpath));
            //         tex.filterMode = FilterMode.Bilinear;
            //
            //         m_Builder.AddValue(tex);
            //
            //         // TODO ScalableImage with @2x
            //     } else if (path.EndsWith(".ttf")) {
            //         Font font = new Font(fullpath);
            //         m_Builder.AddValue(font);
            //     } else {
            //         m_Errors.AddSemanticError(StyleSheetImportErrorCode.InvalidURILocation,
            //             string.Format(StyleValueImporter.glossary.invalidUriLocation, path), m_CurrentLine);
            //     }
            // }
        }

        protected void VisitValue(Term term) {
            var htmlColor = term as HtmlColor;

            if (term == Term.Inherit) {
                m_Builder.AddValue(StyleValueKeyword.Inherit);
            } else if (term is PrimitiveTerm term1) {
                var rawStr = term.ToString();
                switch (term1.PrimitiveType) {
                    case UnitType.Number:
                        m_Builder.AddValue(term1.GetFloatValue(UnitType.Pixel).Value);
                        break;
                    case UnitType.Percentage:
                        m_Builder.AddValue(
                            new Dimension(
                                term1.GetFloatValue(UnitType.Pixel).Value,
                                Dimension.Unit.Percent
                            )
                        );
                        break;
                    case UnitType.Pixel:
                        m_Builder.AddValue(
                            new Dimension(
                                term1.GetFloatValue(UnitType.Pixel).Value,
                                Dimension.Unit.Pixel
                            )
                        );
                        break;
                    case UnitType.Degree:
                        m_Builder.AddValue(
                            new Dimension(
                                term1.GetFloatValue(UnitType.Pixel).Value,
                                Dimension.Unit.Degree
                            )
                        );
                        break;
                    case UnitType.Radian:
                        m_Builder.AddValue(
                            new Dimension(
                                term1.GetFloatValue(UnitType.Pixel).Value,
                                Dimension.Unit.Radian
                            )
                        );
                        break;
                    case UnitType.Grad:
                        m_Builder.AddValue(
                            new Dimension(
                                term1.GetFloatValue(UnitType.Pixel).Value,
                                Dimension.Unit.Gradian
                            )
                        );
                        break;
                    case UnitType.Millisecond:
                        m_Builder.AddValue(
                            new Dimension(
                                term1.GetFloatValue(UnitType.Millisecond).Value,
                                Dimension.Unit.Millisecond
                            )
                        );
                        break;
                    case UnitType.Second:
                        m_Builder.AddValue(
                            new Dimension(
                                term1.GetFloatValue(UnitType.Second).Value,
                                Dimension.Unit.Second
                            )
                        );
                        break;
                    case UnitType.String:
                        m_Builder.AddValue(rawStr.Trim('\'', '"'), StyleValueType.String);
                        break;
                    case UnitType.Uri:
                        VisitUrlFunction(term1);
                        break;
                    case UnitType.Ident:
                        if (TryParseKeyword(rawStr, out var keyword)) {
                            m_Builder.AddValue(keyword);
                            break;
                        }

                        if (rawStr.StartsWith("--")) {
                            m_Builder.AddValue(rawStr, StyleValueType.Variable);
                            break;
                        }

                        m_Builder.AddValue(rawStr, StyleValueType.Enum);
                        break;
                    case UnitType.Turn:
                        m_Builder.AddValue(
                            new Dimension(
                                term1.GetFloatValue(UnitType.Pixel).Value,
                                Dimension.Unit.Turn
                            )
                        );
                        break;
                    default:
                        m_Errors.AddSemanticError(
                            StyleSheetImportErrorCode.UnsupportedUnit,
                            string.Format(
                                glossary.unsupportedUnit,
                                term1
                            ),
                            m_CurrentLine
                        );
                        break;
                }
            } else if (htmlColor != null) {
                m_Builder.AddValue(
                    new Color(
                        htmlColor.R / (float)byte.MaxValue,
                        htmlColor.G / (float)byte.MaxValue,
                        htmlColor.B / (float)byte.MaxValue,
                        htmlColor.A / (float)byte.MaxValue
                    )
                );
            } else if (term is GenericFunction genericFunction) {
                if (genericFunction.Name == "resource") {
                    VisitResourceFunction(genericFunction);
                    // throw new Exception("resource() Not Implemented");
                } else {
                    if (!ValidateFunction(genericFunction, out var func)) {
                        return;
                    }

                    m_Builder.AddValue(func);
                    m_Builder.AddValue(genericFunction.Arguments.Count(a => !(a is Whitespace)));
                    foreach (var term2 in genericFunction.Arguments) {
                        VisitValue(term2);
                    }
                }
            } else if (term is TermList termList) {
                var num = 0;
                foreach (var term3 in termList) {
                    VisitValue(term3);
                    ++num;
                    if (num < termList.Length) {
                        switch (termList.GetSeparatorAt(num - 1)) {
                            case TermList.TermSeparator.Comma:
                                m_Builder.AddCommaSeparator();
                                goto case TermList.TermSeparator.Space;
                            case TermList.TermSeparator.Space:
                            case TermList.TermSeparator.Colon:
                                break;
                            default:
                                throw new ArgumentOutOfRangeException("termSeparator");
                        }
                    }
                }
            } else if (term is Comma) {
                m_Builder.AddCommaSeparator();
            } else {
                if (term is Whitespace) {
                    return;
                }

                m_Errors.AddSemanticError(
                    StyleSheetImportErrorCode.UnsupportedTerm,
                    string.Format(glossary.unsupportedTerm, term.GetType().Name),
                    m_CurrentLine
                );
            }
        }
    }
}
