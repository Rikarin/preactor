using System;
using Object = UnityEngine.Object;

namespace Preactor.Utils {
    [Serializable]
    public class ObjectMappingPair {
        public Object obj;
        public string name;

        public ObjectMappingPair(Object obj, string name) {
            this.obj = obj;
            this.name = name;
        }
    }
}
