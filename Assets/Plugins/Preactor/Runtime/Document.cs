using Preactor.CustomStyleSheets;
using Preactor.Utils.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using UnityEngine;
using UnityEngine.UIElements;
using Object = UnityEngine.Object;

namespace Preactor {
    public class Document {
        static readonly Dictionary<string, Type> TagCache = new();
        public static readonly Dictionary<string, Type> EventBaseCache = new();

        readonly List<StyleSheet> runtimeStyleSheets = new();
        readonly Dictionary<VisualElement, Dom> elementToDomLookup = new();

        public IScriptEngine ScriptEngine { get; }
        public Dom Body { get; }
        public VisualElement Root => Body.VisualElement;

        static Document() {
            CollectAllVisualElementTypes();
            PreCacheEventBase();
        }

        public Document(VisualElement root, IScriptEngine scriptEngine) {
            Body = new(root, this);
            ScriptEngine = scriptEngine;
        }

        [JsInterop]
        public void AddRuntimeUss(string uss) {
            var ss = ScriptableObject.CreateInstance<StyleSheet>();
            var builder = new CustomStyleSheetImporterImpl();
            builder.BuildStyleSheet(ss, uss);

            if (builder.importErrors.hasErrors) {
                Debug.LogError("Runtime USS Error(s)");
                foreach (var error in builder.importErrors) {
                    Debug.LogError(error);
                }

                return;
            }

            runtimeStyleSheets.Add(ss);
            Root.styleSheets.Add(ss);
        }

        [JsInterop]
        public void ClearRuntimeStyleSheets() {
            foreach (var sheet in runtimeStyleSheets) {
                Root.styleSheets.Remove(sheet);
                Object.Destroy(sheet);
            }

            runtimeStyleSheets.Clear();
        }

        [JsInterop]
        public Dom CreateElement(string tagName) {
            if (TagCache.TryGetValue(tagName, out var type)) {
                return new(Activator.CreateInstance(type) as VisualElement, this);
            }

            return new(new(), this);
        }

        [JsInterop]
        public Dom CreateTextNode(string text) => new(new TextElement { text = text }, this);

        [JsInterop]
        public Dom GetElementById(string id) => Body.First(d => d.VisualElement.name == id);

        [JsInterop]
        public Dom[] QuerySelectorAll(string selector) =>
            Root.Query<VisualElement>(selector)
                .Build()
                .Select(elem => elementToDomLookup.GetValueOrDefault(elem))
                .Where(dom => dom != null)
                .ToArray();

        [JsInterop]
        public Sprite LoadImage(string path) => ScriptEngine.ContentProvider.LoadSprite(path);

        [JsInterop]
        public Font LoadFont(string path) => ScriptEngine.ContentProvider.LoadFont(path);

        [JsInterop]
        public FontDefinition LoadFontDefinition(string path) =>
            FontDefinition.FromFont(ScriptEngine.ContentProvider.LoadFont(path));

        static void PreCacheEventBase() {
            var eventTypes = typeof(VisualElement)
                .Assembly
                .GetTypes()
                .Where(type => type.IsSubclassOf(typeof(EventBase)));

            foreach (var type in eventTypes) {
                var key = type.Name.ToLower();
                EventBaseCache.Add(key, type);

                if (type.Name.EndsWith("Event")) {
                    EventBaseCache.Add(key[..^5], type);
                }
            }
        }

        static void CollectAllVisualElementTypes() {
            var assemblies = AppDomain.CurrentDomain.GetAssemblies();
            foreach (var assembly in assemblies) {
                Type[] types;

                try {
                    types = assembly.GetTypes();
                } catch (ReflectionTypeLoadException ex) {
                    types = ex.Types.Where(t => t != null).ToArray();
                }

                foreach (var type in types) {
                    if (type.IsSubclassOf(typeof(VisualElement))) {
                        TagCache[type.Name.ToLower()] = type;
                    }
                }
            }

            Debug.Log($"Collected {TagCache.Count} VisualElement types");
        }

        internal void AddCachingDom(Dom dom) {
            elementToDomLookup[dom.VisualElement] = dom;
        }

        internal void RemoveCachingDom(Dom dom) {
            elementToDomLookup.Remove(dom.VisualElement);
        }
    }
}
