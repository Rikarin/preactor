using System;

namespace Preactor.Utils.Attributes {
    /// <summary>
    ///     Every method marked with this attribute IS exposed to JS! Do not rename without modifying the JS part
    /// </summary>
    [AttributeUsage(
        AttributeTargets.Method | AttributeTargets.Field | AttributeTargets.Property | AttributeTargets.Event
    )]
    public class JsInterop : Attribute { }
}
