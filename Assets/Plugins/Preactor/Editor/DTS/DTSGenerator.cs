using JetBrains.Annotations;
using Preactor.Editor.DTS.Generator.DTS;
using Puerts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using UnityEngine;

namespace Preactor.Editor.DTS {
    public class DTSGenerator {
        public static Type[] GetTypes(Assembly[] assemblies, [CanBeNull] string[] namespaces) {
            var types = assemblies.SelectMany(a => a.GetTypes())
                .Where(
                    t => (t.IsPublic || t.IsNestedPublic)
                        && (t.DeclaringType == null || t.DeclaringType.IsPublic)
                        && t.Namespace != "PuertsStaticWrap"
                        && (namespaces == null || namespaces.Length == 0 || namespaces.Contains(t.Namespace))
                )
                .ToArray();
            return types;
        }

        public static string Generate(
            Type[] types,
            bool exact,
            [CanBeNull]
            Assembly[] strictAssemblies,
            [CanBeNull]
            string[] strictNamespaces
        ) {
            var genInfo = TypingGenInfo.FromTypes(types);
            var tsNamespaces = new List<TsNamespaceGenInfo>();
            foreach (var ns in genInfo.NamespaceInfos) {
                if (exact) {
                    ns.Types = ns.Types.Where(typeGenInfo => types.Contains(typeGenInfo.CSharpType)).ToArray();
                }

                if (strictAssemblies is { Length: > 0 }) {
                    ns.Types = ns.Types.Where(
                            typeGenInfo => {
                                if (strictAssemblies.Contains(typeGenInfo.CSharpType.Assembly)) {
                                    return true;
                                }

                                Debug.LogError($"Type {typeGenInfo.FullName} is not in the specified assemblies.");
                                return false;
                            }
                        )
                        .ToArray();
                }

                if (strictNamespaces is { Length: > 0 }) {
                    ns.Types = ns.Types.Where(typeGenInfo => strictNamespaces.Contains(typeGenInfo.Namespace))
                        .ToArray();
                }

                if (ns.Types.Length > 0) {
                    tsNamespaces.Add(ns);
                }
            }

            genInfo.NamespaceInfos = tsNamespaces.ToArray();
            return Generate(genInfo);
        }

        static string Generate(TypingGenInfo genInfo) {
            using var jsEnv = new JsEnv();
            jsEnv.UsingFunc<TypingGenInfo, bool, string>();
            var typingRender =
                jsEnv.ExecuteModule<Func<TypingGenInfo, bool, string>>("preactor/templates/dts.tpl.mjs", "default");

            return typingRender(genInfo, false);
        }
    }
}
