using Puerts.Editor.Generator;
using UnityEditor;

namespace Preactor.Editor {
    public class PreactMenuItems {
        [MenuItem("Tools/Preactor/Regenerate StaticWrappers", false, 1)]
        static void GenerateStaticWrappers() {
            UnityMenu.ClearAll();
            UnityMenu.GenerateCode();
        }
    }
}
