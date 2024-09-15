using Preactor.CustomStyleSheets.Structs;
using System;
using UnityEngine.UIElements;

namespace Preactor.CustomStyleSheets.Wrappers {
    public class StyleValidatorWrapper {
        readonly Type type;
        readonly object instance;

        public StyleValidatorWrapper() {
            type = typeof(VisualElement).Assembly.GetType("UnityEngine.UIElements.StyleSheets.StyleValidator");
            instance = Activator.CreateInstance(type);
        }

        public StyleValidationResult ValidateProperty(string name, string str) {
            var res = new StyleValidationResult();
            var ori = type.GetMethod("ValidateProperty")
                .Invoke(instance, new object[] { name, str });

            res.FromOriginal(ori);
            return res;
        }
    }
}
