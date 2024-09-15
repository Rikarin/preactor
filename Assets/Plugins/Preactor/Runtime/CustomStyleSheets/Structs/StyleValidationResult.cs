using UnityEngine.UIElements;

namespace Preactor.CustomStyleSheets.Structs {
    public enum StyleValidationStatus {
        Ok,
        Error,
        Warning
    }

    public struct StyleValidationResult {
        public StyleValidationStatus status;
        public string message;
        public string errorValue;
        public string hint;

        public bool success => status == StyleValidationStatus.Ok;

        public void FromOriginal(object original) {
            var type = typeof(VisualElement).Assembly.GetType(
                "UnityEngine.UIElements.StyleSheets.StyleValidationResult"
            );

            status = (StyleValidationStatus)(int)type.GetField("status").GetValue(original);
            message = (string)type.GetField("message").GetValue(original);
            errorValue = (string)type.GetField("errorValue").GetValue(original);
            hint = (string)type.GetField("hint").GetValue(original);
        }
    }
}
