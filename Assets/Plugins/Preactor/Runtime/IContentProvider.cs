using System;
using UnityEngine;

namespace Preactor {
    public interface IContentProvider : IDisposable {
        string LoadJavascript(string path);
        Sprite LoadSprite(string path);
        Texture2D LoadTexture(string path);
        Font LoadFont(string path);
    }
}
