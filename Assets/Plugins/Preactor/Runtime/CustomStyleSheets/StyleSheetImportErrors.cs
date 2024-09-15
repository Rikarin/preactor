using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Preactor.CustomStyleSheets {
    public enum StyleSheetImportErrorType {
        Syntax,
        Semantic,
        Validation,
        Internal
    }

    public enum StyleSheetImportErrorCode {
        None,
        Internal,
        UnsupportedUnit,
        UnsupportedTerm,
        InvalidSelectorListDelimiter,
        InvalidComplexSelectorDelimiter,
        UnsupportedSelectorFormat,
        RecursiveSelectorDetected,
        MissingFunctionArgument,
        InvalidProperty,
        InvalidURILocation,
        InvalidURIScheme,
        InvalidURIProjectAssetPath,
        InvalidVarFunction,
        InvalidHighResolutionImage
    }

    public class StyleSheetImportErrors : IEnumerable<StyleSheetImportError>, IEnumerable {
        readonly List<StyleSheetImportError> m_Errors = new();

        public string assetPath { get; set; }

        public bool hasErrors => m_Errors.Any(e => !e.isWarning);

        public bool hasWarning => m_Errors.Any(e => e.isWarning);

        public void AddSyntaxError(string message, int line) =>
            m_Errors.Add(
                new(
                    StyleSheetImportErrorType.Syntax,
                    StyleSheetImportErrorCode.None,
                    assetPath,
                    message,
                    line
                )
            );

        public void AddSemanticError(StyleSheetImportErrorCode code, string message, int line) =>
            m_Errors.Add(new(StyleSheetImportErrorType.Semantic, code, assetPath, message, line));

        public void AddSemanticWarning(StyleSheetImportErrorCode code, string message, int line) =>
            m_Errors.Add(new(StyleSheetImportErrorType.Semantic, code, assetPath, message, line, true));

        public void AddInternalError(string message, int line = -1) =>
            m_Errors.Add(
                new(
                    StyleSheetImportErrorType.Internal,
                    StyleSheetImportErrorCode.None,
                    assetPath,
                    message,
                    line
                )
            );

        public void AddValidationWarning(string message, int line) =>
            m_Errors.Add(
                new(
                    StyleSheetImportErrorType.Validation,
                    StyleSheetImportErrorCode.InvalidProperty,
                    assetPath,
                    message,
                    line,
                    true
                )
            );

        public IEnumerator<StyleSheetImportError> GetEnumerator() => m_Errors.GetEnumerator();

        IEnumerator IEnumerable.GetEnumerator() => m_Errors.GetEnumerator();
    }
}
