using Preactor.Utils;
using Preactor.Utils.Attributes;
using UnityEngine;
using UnityEngine.UIElements;

namespace Preactor {
    [AddComponentMenu("Preactor/Preact Global")]
    public class PreactGlobal : MonoBehaviour {
        [field: SerializeField] public TextAsset[] Preloads { get; private set; }

        [field: PairMapping("obj", "name")]
        [field: SerializeField]
        public ObjectMappingPair[] GlobalObjects { get; private set; }

        [field: SerializeField] public StyleSheet[] StyleSheets { get; private set; }
    }
}
