using System;

namespace Preactor {
    public interface IScriptEngine {
        IContentProvider ContentProvider { get; }

        event Action OnDestroyed;
    }
}
