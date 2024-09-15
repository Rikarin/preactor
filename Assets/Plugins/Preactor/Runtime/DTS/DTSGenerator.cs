using Preactor.Utils.Attributes;
using UnityEngine;

namespace Preactor {
    [AddComponentMenu("Preactor/DTS Generator")]
    public class DTSGenerator : MonoBehaviour {
        [AssemblySelector]
        public string[] assemblies;

        [PlainString]
        public string[] namespaces;

        [PlainString]
        public string[] whitelistedTypes;

        [PlainString]
        public string[] blacklistedTypes;

        [Tooltip("Relative to the Views working directory.")]
        public string savePath = "@types/app.d.ts";

        [Tooltip("Check to only generate typings for the declared Assemblies.")]
        public bool strictAssemblies;

        [Tooltip("Check to only generate typings for the declared namespaces.")]
        public bool strictNamespaces;

        [Tooltip("Check to only generate exact typings (no supporting types will be generated).")]
        public bool exact;

        [Tooltip(
            "Check to only generate typings for whitelisted types (supporting types will still be generated unless 'Exact' is checked)."
        )]
        public bool whitelistOnly;
    }
}
