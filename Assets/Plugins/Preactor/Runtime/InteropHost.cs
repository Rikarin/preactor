using Preactor.Utils.Attributes;
using Puerts;
using System;
using System.Reflection;
using UnityEngine;

namespace Preactor {
    /// <summary>
    ///     Used to provide host objects and host functions to the JS side under `interop` global variable
    /// </summary>
    public class InteropHost {
        readonly IScriptEngine scriptEngine;

        public InteropHost(IScriptEngine scriptEngine) {
            this.scriptEngine = scriptEngine;
        }

        [JsInterop]
        public Action AddOrUpdateSubscribe(object store, object key, GenericDelegate handler) {
            Action<object> callback = handler.Action;

            var args = store.GetType().BaseType!.GetGenericArguments();
            if (args.Length != 2) {
                throw new NotSupportedException("Store should have 2 generic arguments");
            }

            var enumKey = Enum.Parse(args[0], key.ToString());
            var methodInfo = store.GetType().GetMethod("AddOrUpdateSubscribe");
            if (methodInfo == null) {
                throw new NotSupportedException("AddOrUpdateSubscribe method not found");
            }

            var disposable = methodInfo.Invoke(store, new[] { enumKey, callback }) as IDisposable;
            OnReload += Unsubscribe;
            OnDestroy += Unsubscribe;

            return Unsubscribe;

            void Unsubscribe() {
                disposable?.Dispose();
                OnReload -= Unsubscribe;
                OnDestroy -= Unsubscribe;
            }
        }

        /// <summary>
        ///     Use this method to subscribe to an event on an object
        /// </summary>
        /// <param name="eventSource">The object containing the event</param>
        /// <param name="eventName">The name of the event</param>
        /// <param name="handler">A C# delegate or a JS function</param>
        /// <returns>A function to unsubscribe event</returns>
        /// <exception cref="ArgumentNullException"></exception>
        /// <exception cref="NotSupportedException"></exception>
        /// <exception cref="ArgumentException"></exception>
        [JsInterop]
        public Action Subscribe(object eventSource, string eventName, GenericDelegate handler) {
            if (eventSource is null) {
                throw new ArgumentNullException(nameof(eventSource), "[SubscribeEvent] Event source is null.");
            }

            if (eventSource is JSObject) {
                throw new NotSupportedException("[SubscribeEvent] Cannot subscribe event on JS value.");
            }

            var eventInfo = eventSource.GetType().GetEvent(eventName, BindingFlags.Public | BindingFlags.Instance);
            if (eventInfo is null) {
                throw new ArgumentException(
                    $"[SubscribeEvent] Cannot find event \"{eventName}\" on type \"{eventSource.GetType()}\".",
                    nameof(eventName)
                );
            }

            var handlerDelegate = GenericDelegateWrapper.Wrap(eventInfo, handler);
            var isOnReloadEvent = eventSource == this && eventName == nameof(OnReload);

            eventInfo.AddEventHandler(eventSource, handlerDelegate);

            OnDestroy += Unsubscribe;
            if (!isOnReloadEvent) {
                OnReload += Unsubscribe;
            }

            return Unsubscribe;

            void Unsubscribe() {
                eventInfo.RemoveEventHandler(eventSource, handlerDelegate);
                OnDestroy -= Unsubscribe;

                if (!isOnReloadEvent) {
                    OnReload -= Unsubscribe;
                }
            }
        }

        [JsInterop]
        public Action Subscribe(string eventName, GenericDelegate handler) => Subscribe(this, eventName, handler);

        [JsInterop]
        public event Action OnReload {
            add => scriptEngine.OnReload += value;
            remove => scriptEngine.OnReload -= value;
        }

        [JsInterop]
        public event Action OnDestroy {
            add => scriptEngine.OnDestroyed += value;
            remove => scriptEngine.OnDestroyed -= value;
        }
    }
}
