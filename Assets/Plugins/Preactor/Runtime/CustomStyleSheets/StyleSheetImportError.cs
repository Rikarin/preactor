namespace Preactor.CustomStyleSheets {
    public struct StyleSheetImportError {
        public readonly StyleSheetImportErrorType error;
        public readonly StyleSheetImportErrorCode code;
        public readonly string assetPath;
        public readonly string message;
        public readonly int line;
        public readonly bool isWarning;

        public StyleSheetImportError(
            StyleSheetImportErrorType error,
            StyleSheetImportErrorCode code,
            string assetPath,
            string message,
            int line = -1,
            bool isWarning = false
        ) {
            this.error = error;
            this.code = code;
            this.assetPath = assetPath;
            this.message = message;
            this.line = line;
            this.isWarning = isWarning;
        }

        public override string ToString() => ToString(StyleValueImporter.glossary);

        public string ToString(StyleSheetImportGlossary glossary) =>
            assetPath
            + (line > -1 ? $" ({glossary.line} {line})" : "")
            + ": "
            + (isWarning ? glossary.warning : glossary.error)
            + ": "
            + message;
    }
}
