using Puerts;
using System;
using System.Linq;
using System.Reflection;

namespace Preactor {
    public class GenericDelegateWrapper {
        readonly GenericDelegate handler;
        readonly Delegate @delegate;

        /// <summary>
        ///     https://nondisplayable.ca/2017/03/31/using-reflection-to-bind-lambda-to-event-handler.html
        /// </summary>
        public GenericDelegateWrapper(EventInfo eventInfo, GenericDelegate handler) {
            this.handler = handler;

            var handlerType = eventInfo.EventHandlerType;
            var invoke = handlerType.GetMethod("Invoke");

            if (invoke.ReturnType != typeof(void)) {
                throw new ArgumentException(
                    "[GenericDelegateWrapper] Only support event delegate that return nothing."
                );
            }

            var pars = invoke.GetParameters();
            var paramTypes = pars.Select(p => p.ParameterType).ToArray();
            var methodInfo =
                typeof(GenericDelegateWrapper).GetMethod(nameof(GetAction), paramTypes.Length, Array.Empty<Type>())
                ?? throw new ArgumentException(
                    "[GenericDelegateWrapper] Only support handler with up to 4 parameters.",
                    nameof(handler)
                );

            if (paramTypes.Length > 0) {
                methodInfo = methodInfo.MakeGenericMethod(paramTypes);
            }

            var h = (Delegate)methodInfo.Invoke(this, Array.Empty<object>());
            @delegate = Delegate.CreateDelegate(handlerType, h, "Invoke");
        }

        public static Delegate Wrap(EventInfo eventInfo, GenericDelegate handler) =>
            new GenericDelegateWrapper(eventInfo, handler).GetWrapped();

        public Delegate GetWrapped() => @delegate;
        public Action GetAction() => () => handler.Action();
        public Action<T> GetAction<T>() => a => handler.Action(a);
        public Action<T1, T2> GetAction<T1, T2>() => (a, b) => handler.Action(a, b);
        public Action<T1, T2, T3> GetAction<T1, T2, T3>() => (a, b, c) => handler.Action(a, b, c);
        public Action<T1, T2, T3, T4> GetAction<T1, T2, T3, T4>() => (a, b, c, d) => handler.Action(a, b, c, d);
    }
}
