using Preactor.CustomStyleSheets.Structs;
using System;
using System.Text.RegularExpressions;

namespace Preactor.CustomStyleSheets {
    public static class CSSSpec {
        static readonly Regex regex =
            new(
                "(?<id>#[-]?\\w[\\w-]*)|(?<class>\\.[\\w-]+)|(?<pseudoclass>:[\\w-]+(\\((?<param>.+)\\))?)|(?<type>[^\\-]\\w+)|(?<wildcard>\\*)|\\s+",
                RegexOptions.IgnoreCase | RegexOptions.Compiled
            );

        public static int GetSelectorSpecificity(string selector) =>
            ParseSelector(selector, out var parts) ? GetSelectorSpecificity(parts) : 0;

        public static int GetSelectorSpecificity(StyleSelectorPart[] parts) {
            var selectorSpecificity = 1;

            foreach (var t in parts) {
                switch (t.type) {
                    case StyleSelectorType.Type:
                        ++selectorSpecificity;
                        break;
                    case StyleSelectorType.Class:
                    case StyleSelectorType.PseudoClass:
                        selectorSpecificity += 10;
                        break;
                    case StyleSelectorType.RecursivePseudoClass:
                        throw new ArgumentException("Recursive pseudo classes are not supported");
                    case StyleSelectorType.ID:
                        selectorSpecificity += 100;
                        break;
                }
            }

            return selectorSpecificity;
        }

        public static bool ParseSelector(string selector, out StyleSelectorPart[] parts) {
            var matchCollection = regex.Matches(selector);
            var count = matchCollection.Count;
            if (count < 1) {
                parts = null;
                return false;
            }

            parts = new StyleSelectorPart[count];
            for (var i = 0; i < count; ++i) {
                var match = matchCollection[i];
                var styleSelectorType = StyleSelectorType.Unknown;
                var str1 = string.Empty;

                if (!string.IsNullOrEmpty(match.Groups["wildcard"].Value)) {
                    str1 = "*";
                    styleSelectorType = StyleSelectorType.Wildcard;
                } else if (!string.IsNullOrEmpty(match.Groups["id"].Value)) {
                    str1 = match.Groups["id"].Value.Substring(1);
                    styleSelectorType = StyleSelectorType.ID;
                } else if (!string.IsNullOrEmpty(match.Groups["class"].Value)) {
                    str1 = match.Groups["class"].Value.Substring(1);
                    styleSelectorType = StyleSelectorType.Class;
                } else if (!string.IsNullOrEmpty(match.Groups["pseudoclass"].Value)) {
                    var str2 = match.Groups["param"].Value;
                    if (!string.IsNullOrEmpty(str2)) {
                        str1 = str2;
                        styleSelectorType = StyleSelectorType.RecursivePseudoClass;
                    } else {
                        str1 = match.Groups["pseudoclass"].Value.Substring(1);
                        styleSelectorType = StyleSelectorType.PseudoClass;
                    }
                } else if (!string.IsNullOrEmpty(match.Groups["type"].Value)) {
                    str1 = match.Groups["type"].Value;
                    styleSelectorType = StyleSelectorType.Type;
                }

                parts[i] = new() { type = styleSelectorType, value = str1 };
            }

            return true;
        }
    }
}
