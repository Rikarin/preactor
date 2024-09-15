using Preactor.Utils.Attributes;
using System;
using System.Linq;
using UnityEditor;
using UnityEngine;

namespace Preactor.Editor {
    [CustomPropertyDrawer(typeof(AssemblySelectorAttribute))]
    public class AssemblySelectorDrawer : PropertyDrawer {
        string[] assemblyNames;
        int selectedIndex;

        public override void OnGUI(Rect position, SerializedProperty property, GUIContent label) {
            // Ensure the property is a string (since we store the assembly name as a string)
            if (property.propertyType != SerializedPropertyType.String) {
                EditorGUI.LabelField(position, label.text, "Use [AssemblySelector] with string.");
                return;
            }

            if (assemblyNames == null || assemblyNames.Length == 0) {
                LoadAssemblies();
            }

            selectedIndex = Array.IndexOf(assemblyNames, property.stringValue);
            if (selectedIndex == -1) {
                selectedIndex = 0;
            }

            selectedIndex = EditorGUI.Popup(position, label.text, selectedIndex, assemblyNames);
            property.stringValue = assemblyNames[selectedIndex];
        }

        void LoadAssemblies() {
            var assemblies = AppDomain.CurrentDomain.GetAssemblies();
            assemblyNames = assemblies.Select(assembly => assembly.GetName().Name).ToArray();
        }
    }
}
