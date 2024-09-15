using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using UnityEditor;
using UnityEngine;
using Debug = UnityEngine.Debug;

namespace Preactor.Editor {
    [CustomEditor(typeof(DTSGenerator))]
    [CanEditMultipleObjects]
    public class DTSGeneratorEditor : UnityEditor.Editor {
        SerializedProperty assemblies;
        SerializedProperty blacklistedTypes;
        SerializedProperty exact;
        SerializedProperty namespaces;
        SerializedProperty savePath;
        SerializedProperty strictAssemblies;
        SerializedProperty strictNamespaces;
        SerializedProperty whitelistedTypes;
        SerializedProperty whitelistOnly;

        void OnEnable() {
            assemblies = serializedObject.FindProperty("assemblies");
            namespaces = serializedObject.FindProperty("namespaces");
            whitelistedTypes = serializedObject.FindProperty("whitelistedTypes");
            blacklistedTypes = serializedObject.FindProperty("blacklistedTypes");
            savePath = serializedObject.FindProperty("savePath");
            strictAssemblies = serializedObject.FindProperty("strictAssemblies");
            strictNamespaces = serializedObject.FindProperty("strictNamespaces");
            whitelistOnly = serializedObject.FindProperty("whitelistOnly");
            exact = serializedObject.FindProperty("exact");
        }

        public override void OnInspectorGUI() {
            serializedObject.Update();
            EditorGUILayout.HelpBox(
                "For generating TypeScript definitions from C# assemblies/namespaces",
                MessageType.None
            );

            EditorGUILayout.PropertyField(assemblies, new GUIContent("Assemblies"));
            EditorGUILayout.PropertyField(namespaces, new GUIContent("Namespaces"));
            EditorGUILayout.PropertyField(whitelistedTypes, new GUIContent("Whitelisted Types"));
            EditorGUILayout.PropertyField(blacklistedTypes, new GUIContent("Blacklisted Types"));
            EditorGUILayout.PropertyField(savePath, new GUIContent("Save Path"));
            EditorGUILayout.PropertyField(strictAssemblies, new GUIContent("Strict Assemblies"));
            EditorGUILayout.PropertyField(strictNamespaces, new GUIContent("Strict Namespaces"));
            EditorGUILayout.PropertyField(whitelistOnly, new GUIContent("Whitelist Only"));
            EditorGUILayout.PropertyField(exact, new GUIContent("Exact"));

            EditorGUILayout.Space(10);
            if (GUILayout.Button(new GUIContent("Generate", "Generate TS Definitions"), GUILayout.Height(30))) {
                Generate();
            }

            serializedObject.ApplyModifiedProperties();
        }

        public void Generate() {
            var t = Stopwatch.StartNew();

            var namespaces = this.namespaces.ToStringArray();
            var assemblies = this.assemblies.ToStringArray()
                .Select(
                    x => {
                        try {
                            return Assembly.Load(x);
                        } catch (Exception) {
                            Debug.Log(
                                $"Could not load assembly \"{x}\". Please check your string(s) in the Assemblies list."
                            );
                            return null;
                        }
                    }
                )
                .Where(a => a != null)
                .ToArray();

            Type SelectType(string typeName, string listName) {
                var type = assemblies.Select(assembly => assembly.GetType(typeName))
                    .FirstOrDefault(result => result != null);

                if (type == null) {
                    Debug.LogError(
                        $"Could not load type \"{typeName}\". Please check your string(s) in the {listName} types list."
                    );
                }

                return type;
            }

            var typesToAdd = whitelistedTypes.ToStringArray()
                .Select(t => SelectType(t, "whitelisted"))
                .Where(t => t != null)
                .ToArray();

            var typesToRemove = blacklistedTypes.ToStringArray()
                .Select(t => SelectType(t, "blacklisted"))
                .Where(t => t != null)
                .ToArray();

            HashSet<Type> uniqueSet;
            if (whitelistOnly.boolValue) {
                uniqueSet = new(typesToAdd);
            } else {
                var types = DTS.DTSGenerator.GetTypes(assemblies, namespaces);
                types = types.Concat(typesToAdd).ToArray();

                uniqueSet = new(types);
                uniqueSet.ExceptWith(typesToRemove);
            }

            var fullSavePath = Path.Combine(
                Path.GetDirectoryName(Application.dataPath)!,
                "Preactor",
                savePath.stringValue
            );

            GenerateDTS(fullSavePath, uniqueSet.ToArray(), assemblies, namespaces);
            Debug.Log($"[{t.Elapsed.TotalSeconds} seconds] Generated {fullSavePath}");
        }

        void GenerateDTS(string fullSavePath, Type[] types, Assembly[] assemblies, string[] namespaces) {
            var directory = Path.GetDirectoryName(fullSavePath);
            if (directory == null) {
                Debug.LogError("Invalid output directory.");
                return;
            }

            if (!Directory.Exists(directory)) {
                Directory.CreateDirectory(directory);
            }

            var res = DTS.DTSGenerator.Generate(
                types,
                exact.boolValue,
                strictAssemblies.boolValue ? assemblies : null,
                strictNamespaces.boolValue ? namespaces : null
            );

            File.WriteAllText(fullSavePath, res);
        }
    }
}
