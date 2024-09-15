using UnityEngine;
using UnityEngine.AddressableAssets;

namespace Preactor.ContentProviders {
    public class AddressablesContentProvider : IContentProvider {
        public string LoadJavascript(string path) =>
            Addressables.LoadAssetAsync<TextAsset>(path).WaitForCompletion().text;

        public Sprite LoadSprite(string path) => Addressables.LoadAssetAsync<Sprite>(path).WaitForCompletion();
        public Texture2D LoadTexture(string path) => Addressables.LoadAssetAsync<Texture2D>(path).WaitForCompletion();
        public Font LoadFont(string path) => Addressables.LoadAssetAsync<Font>(path).WaitForCompletion();
    }
}
