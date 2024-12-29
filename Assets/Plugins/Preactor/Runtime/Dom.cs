using Preactor.Utils.Attributes;
using Puerts;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using UnityEngine;
using UnityEngine.UIElements;

namespace Preactor {
    public class Dom {
        static readonly (string, string)[] ReplacePairsForClassNames = {
            (".", "_d_"), ("/", "_s_"), (":", "_c_"), ("%", "_p_"), ("#", "_n_"), ("[", "_lb_"), ("]", "_rb_"),
            ("(", "_lp_"), (")", "_rp_"), (",", "_cm_"), ("&", "_amp_"), (">", "_gt_"), ("<", "_lt_"), ("*", "_ast_")
        };

        object data;
        readonly List<Dom> childNodes = new();
        readonly Dictionary<string, List<RegisteredCallbackHolder>> registeredCallbacks = new();
        static readonly Dictionary<string, RegisterCallbackDelegate> EventCache = new();
        public Document Document { get; }

        [JsInterop]
        public VisualElement VisualElement { get; }

        [JsInterop]
        public Dom[] ChildNodes => childNodes.ToArray();

        [JsInterop]
        public Dom FirstChild => childNodes.FirstOrDefault();

        [JsInterop]
        public Dom ParentNode { get; private set; }

        [JsInterop]
        public Dom NextSibling { get; private set; }

        [JsInterop]
        public int NodeType { get; private set; }

        [JsInterop]
        public string Id {
            get => VisualElement.name;
            set => VisualElement.name = value;
        }

        [JsInterop]
        public string Key { get; set; }

        [JsInterop]
        public DomStyle Style { get; }

        [JsInterop]
        public object Value { get; private set; }

        [JsInterop]
        public bool Checked { get; private set; }

        [JsInterop]
        public object Data {
            get => data;
            set {
                data = value;
                if (VisualElement is TextElement element) {
                    element.text = value.ToString();
                }
            }
        }

        [JsInterop]
        public string ClassName {
            get => string.Join(" ", VisualElement.GetClasses().Where(c => !c.StartsWith("unity-")).ToArray());
            set => SetAttribute("class", value);
        }

        public Dom(VisualElement visualElement, Document document) {
            VisualElement = visualElement;
            Document = document;
            Style = new(this);
        }

        public static void RegisterCallback<T>(
            VisualElement ve,
            EventCallback<T> callback,
            TrickleDown trickleDown = TrickleDown.NoTrickleDown
        ) where T : EventBase<T>, new() =>
            ve.RegisterCallback(callback, trickleDown);

        [JsInterop]
        public void ClearChildren() {
            VisualElement.Clear();
        }

        [JsInterop]
        public bool Contains(Dom dom) => VisualElement.Contains(dom.VisualElement);

        [JsInterop]
        public void AddEventListener(string name, EventCallback<EventBase> callback, bool useCapture = false) {
            var nameLower = name.ToLower();
            var isValueChanged = nameLower == "valuechanged";
            if (!isValueChanged && EventCache.ContainsKey(nameLower)) {
                EventCache[nameLower](
                    VisualElement,
                    callback,
                    useCapture ? TrickleDown.TrickleDown : TrickleDown.NoTrickleDown
                );
            } else {
                Type eventType = null;
                if (isValueChanged) {
                    var notifyInterface = VisualElement
                        .GetType()
                        .GetInterfaces()
                        .FirstOrDefault(i => i.Name == "INotifyValueChanged`1");

                    if (notifyInterface != null) {
                        var valType = notifyInterface.GenericTypeArguments[0];
                        eventType = typeof(VisualElement).Assembly.GetType("UnityEngine.UIElements.ChangeEvent`1");
                        eventType = eventType.MakeGenericType(valType);
                    }
                } else {
                    eventType = Document.EventBaseCache.GetValueOrDefault(nameLower);
                }

                if (eventType != null) {
                    var mi = GetType().GetMethod("RegisterCallback")!.MakeGenericMethod(eventType);
                    var del = (RegisterCallbackDelegate)Delegate.CreateDelegate(typeof(RegisterCallbackDelegate), mi);
                    if (!isValueChanged) {
                        EventCache.TryAdd(nameLower, del);
                    }

                    del(VisualElement, callback, useCapture ? TrickleDown.TrickleDown : TrickleDown.NoTrickleDown);
                }
            }

            var callbackHolder = new RegisteredCallbackHolder { Callback = callback, UseCapture = useCapture };
            if (!registeredCallbacks.TryGetValue(nameLower, out var callbackList)) {
                callbackList = new();
                registeredCallbacks[nameLower] = callbackList;
            }

            callbackList.Add(callbackHolder);
        }

        /// <summary>
        ///     Name, callback, and useCapture must match exactly to remove the listener.
        /// </summary>
        [JsInterop]
        public void RemoveEventListener(string name, EventCallback<EventBase> callback, bool useCapture = false) {
            var nameLower = name.ToLower();
            if (!registeredCallbacks.TryGetValue(nameLower, out var callbackHolders)) {
                return;
            }

            var eventType = Document.EventBaseCache.GetValueOrDefault(nameLower);
            if (eventType != null) {
                const BindingFlags flags = BindingFlags.Public | BindingFlags.Instance;

                var mi = VisualElement.GetType()
                    .GetMethods(flags)
                    .First(m => m.Name == "UnregisterCallback" && m.GetGenericArguments().Length == 1)
                    .MakeGenericMethod(eventType);

                for (var i = 0; i < callbackHolders.Count; i++) {
                    if (callbackHolders[i].Callback == callback && callbackHolders[i].UseCapture == useCapture) {
                        mi.Invoke(
                            VisualElement,
                            new object[] {
                                callbackHolders[i].Callback,
                                useCapture ? TrickleDown.TrickleDown : TrickleDown.NoTrickleDown
                            }
                        );

                        callbackHolders.RemoveAt(i);
                        i--;
                    }
                }

                if (callbackHolders.Count == 0) {
                    registeredCallbacks.Remove(nameLower);
                }
            }
        }

        [JsInterop]
        public void AppendChild(Dom node) {
            if (node == null) {
                return;
            }

            try {
                VisualElement.Add(node.VisualElement);
            } catch (Exception e) {
                throw new("Unable to add DOM (AppendChild)");
            }

            node.ParentNode = this;
            if (childNodes.Count > 0) {
                childNodes[^1].NextSibling = node;
            }

            childNodes.Add(node);
            Document.AddCachingDom(node);
        }

        [JsInterop]
        public void RemoveChild(Dom child) {
            if (child == null || !VisualElement.Contains(child.VisualElement)) {
                return;
            }

            using (var evt = TransitionCancelEvent.GetPooled()) {
                evt.target = child.VisualElement;
                child.VisualElement.SendEvent(evt);
            }

            VisualElement.Remove(child.VisualElement);
            var index = childNodes.IndexOf(child);
            if (index > 0) {
                var prev = childNodes[index - 1];
                prev.NextSibling = child.NextSibling;
            }

            childNodes.Remove(child);
            child.ParentNode = null;
            Document.RemoveCachingDom(child);
        }

        [JsInterop]
        public void InsertBefore(Dom a, Dom b) {
            if (a == null) {
                return;
            }

            if (a == b) {
                return;
            }

            if (b?.VisualElement == null || VisualElement.IndexOf(b.VisualElement) == -1) {
                AppendChild(a);
                return;
            }

            var index = VisualElement.IndexOf(b.VisualElement);
            VisualElement.Insert(index, a.VisualElement);
            childNodes.Insert(index, a);
            a.NextSibling = b;
            a.ParentNode = this;

            if (index > 0) {
                childNodes[index - 1].NextSibling = a;
            }

            Document.AddCachingDom(a);
        }

        [JsInterop]
        public void SetAttribute(string name, object val) {
            if (name is "class" or "className") {
                var unityClassnames = VisualElement.GetClasses().Where(c => c.StartsWith("unity-")).ToArray();
                VisualElement.ClearClassList();
                var unprocessedClassStr = ProcessClassStr(val.ToString());

                var parts = unprocessedClassStr.Split(' ', StringSplitOptions.RemoveEmptyEntries);
                foreach (var unityClassname in unityClassnames) {
                    VisualElement.AddToClassList(unityClassname);
                }

                foreach (var part in parts) {
                    VisualElement.AddToClassList(part);
                }
            } else if (name is "id" or "name") {
                VisualElement.name = val.ToString();
            } else if (name == "disabled") {
                VisualElement.SetEnabled(!Convert.ToBoolean(val));
            } else {
                name = name.Replace("-", "");
                const BindingFlags flags = BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase;
                var ei = VisualElement.GetType().GetEvent(name, flags);
                if (ei != null) {
                    ei.AddMethod.Invoke(VisualElement, new[] { val });
                    return;
                }

                var pi = VisualElement.GetType().GetProperty(name, flags);
                if (pi != null) {
                    var genericArgs = pi.PropertyType.GetGenericArguments();
                    if (pi.PropertyType.IsEnum) {
                        val = Convert.ToInt32(val);
                    } else if (val is JSObject jsObj && jsObj.Get<int>("length") > 0) {
                        var length = jsObj.Get<int>("length");
                        var objAry = new object[length];
                        for (var i = 0; i < length; i++) {
                            objAry[i] = jsObj.Get<object>(i.ToString());
                        }

                        if (pi.PropertyType.IsArray) {
                            var destinationArray = Array.CreateInstance(pi.PropertyType.GetElementType(), length);
                            Array.Copy(objAry, destinationArray, length);
                            val = destinationArray;
                        } else if (genericArgs.Length > 0) {
                            var listType = typeof(List<>).MakeGenericType(genericArgs);
                            if (pi.PropertyType == listType) {
                                var destinationArray = Array.CreateInstance(genericArgs[0], length);
                                Array.Copy(objAry, destinationArray, length);
                                var list = (IList)Activator.CreateInstance(listType, destinationArray);
                                val = list;
                            }
                        }
                    } else if (pi.PropertyType == typeof(float) && val.GetType() == typeof(double)) {
                        val = Convert.ToSingle(val);
                    } else if (pi.PropertyType == typeof(int) && val.GetType() == typeof(double)) {
                        val = Convert.ToInt32(val);
                    } else if (pi.PropertyType == typeof(char) && val.GetType() == typeof(string)) {
                        val = val.ToString()[0];
                    }

                    pi.SetValue(VisualElement, val);
                }
            }
        }

        [JsInterop]
        public void RemoveAttribute(string name) {
            switch (name) {
                case "class" or "className":
                    VisualElement.ClearClassList();
                    break;

                case "id":
                    VisualElement.name = null;
                    break;

                case "disabled":
                    VisualElement.SetEnabled(true);
                    break;

                default: {
                    const BindingFlags flags = BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase;
                    var pi = VisualElement.GetType().GetProperty(name, flags);
                    if (pi != null) {
                        pi.SetValue(VisualElement, null);
                    }

                    break;
                }
            }
        }

        [JsInterop]
        public void Focus() {
            VisualElement.Focus();
        }

        public override string ToString() => $"dom: {VisualElement.GetType().Name} ({VisualElement.GetHashCode()})";

        public Dom First(Func<Dom, bool> predicate) {
            Queue<Dom> q = new();
            q.Enqueue(this);

            while (q.Count > 0) {
                var cnt = q.Count;
                for (var i = 0; i < cnt; i++) {
                    var cur = q.Dequeue();

                    if (predicate(cur)) {
                        return cur;
                    }

                    if (cur.childNodes != null) {
                        foreach (var t in cur.childNodes) {
                            q.Enqueue(t);
                        }
                    }
                }
            }

            return null;
        }

        string ProcessClassStr(string classStr) {
            var names = classStr.Split(' ', StringSplitOptions.RemoveEmptyEntries);
            names = names.Select(s => s[0] >= 48 && s[0] <= 57 ? "_" + s : s).ToArray(); // ^\d => _\d

            var output = string.Join(" ", names);
            return TransformUsingPairs(output, ReplacePairsForClassNames);
        }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
        static void Init() {
            EventCache.Clear();
        }

        /// <summary>
        ///     A more performant version of chained string.Replace
        /// </summary>
        static string TransformUsingPairs(string input, (string, string)[] pairs) {
            var sb = new StringBuilder(input);
            var indices = new List<(int, int, string)>();

            foreach (var pair in pairs) {
                var index = 0;
                while ((index = input.IndexOf(pair.Item1, index)) != -1) {
                    indices.Add((index, pair.Item1.Length, pair.Item2));
                    index += pair.Item1.Length;
                }
            }

            indices.Sort((a, b) => b.Item1.CompareTo(a.Item1));

            foreach (var tuple in indices) {
                sb.Remove(tuple.Item1, tuple.Item2);
                sb.Insert(tuple.Item1, tuple.Item3);
            }

            return sb.ToString();
        }

        delegate void RegisterCallbackDelegate(
            VisualElement ve,
            EventCallback<EventBase> callback,
            TrickleDown trickleDown = TrickleDown.NoTrickleDown
        );
    }

    class RegisteredCallbackHolder {
        public EventCallback<EventBase> Callback { get; set; }
        public bool UseCapture { get; set; }
    }
}
