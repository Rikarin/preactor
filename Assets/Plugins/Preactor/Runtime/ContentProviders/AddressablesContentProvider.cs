using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;

namespace Preactor.ContentProviders {
    public class AddressablesContentProvider : IContentProvider {
        readonly Dictionary<string, AsyncOperationHandle<TextAsset>> javascriptCache = new();
        readonly Dictionary<string, AsyncOperationHandle<Sprite>> spriteCache = new();
        readonly Dictionary<string, AsyncOperationHandle<Texture2D>> textureCache = new();
        readonly Dictionary<string, AsyncOperationHandle<Font>> fontCache = new();

        public string LoadJavascript(string path) {
            if (!javascriptCache.TryGetValue(path, out var handle)) {
                handle = Addressables.LoadAssetAsync<TextAsset>(path);
                handle.WaitForCompletion();
                javascriptCache.Add(path, handle);
            }

            return handle.Result.text;
        }

        public Sprite LoadSprite(string path) {
            if (!spriteCache.TryGetValue(path, out var handle)) {
                handle = Addressables.LoadAssetAsync<Sprite>(path);
                handle.WaitForCompletion();
                spriteCache.Add(path, handle);
            }

            return handle.Result;
        }

        public Texture2D LoadTexture(string path) {
            if (!textureCache.TryGetValue(path, out var handle)) {
                handle = Addressables.LoadAssetAsync<Texture2D>(path);
                handle.WaitForCompletion();
                textureCache.Add(path, handle);
            }

            return handle.Result;
        }

        public Font LoadFont(string path) {
            if (!fontCache.TryGetValue(path, out var handle)) {
                handle = Addressables.LoadAssetAsync<Font>(path);
                handle.WaitForCompletion();
                fontCache.Add(path, handle);
            }

            return handle.Result;
        }

        public void Dispose() {
            foreach (var handle in javascriptCache.Values) {
                Addressables.Release(handle);
            }

            foreach (var handle in spriteCache.Values) {
                Addressables.Release(handle);
            }

            foreach (var handle in textureCache.Values) {
                Addressables.Release(handle);
            }

            foreach (var handle in fontCache.Values) {
                Addressables.Release(handle);
            }
            
            javascriptCache.Clear();
            spriteCache.Clear();
            textureCache.Clear();
            fontCache.Clear();
        }
    }
}
