using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

namespace Preactor.Editor {
    public static class SerializedPropertyExtensions {
        public static string[] ToStringArray(this SerializedProperty property) {
            if (property == null) {
                Debug.LogError("SerializedProperty is null");
                return Array.Empty<string>();
            }

            if (!property.isArray) {
                Debug.LogError("SerializedProperty is not an array");
                return Array.Empty<string>();
            }

            var result = new List<string>();
            for (var i = 0; i < property.arraySize; i++) {
                var element = property.GetArrayElementAtIndex(i);
                if (element.propertyType == SerializedPropertyType.String) {
                    result.Add(element.stringValue);
                } else {
                    Debug.LogWarning($"Element at index {i} is not a string. Skipping.");
                }
            }

            return result.ToArray();
        }
    }
}
