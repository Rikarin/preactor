using System.Linq;
using UnityEditor;
using UnityEngine;

namespace Preactor.Editor {
    [CustomEditor(typeof(PreactRenderer))]
    [CanEditMultipleObjects]
    public class PreactRendererEditor : UnityEditor.Editor {
        SerializedProperty clearLogs;
        SerializedProperty entryFile;
        SerializedProperty globalObjects;

        SerializedProperty liveReload;
        SerializedProperty pollingInterval;
        SerializedProperty preloads;
        SerializedProperty styleSheets;

        void OnEnable() {
            entryFile = serializedObject.FindProperty("<EntryFile>k__BackingField");
            globalObjects = serializedObject.FindProperty("<GlobalObjects>k__BackingField");
            preloads = serializedObject.FindProperty("<Preloads>k__BackingField");
            styleSheets = serializedObject.FindProperty("<StyleSheets>k__BackingField");

            liveReload = serializedObject.FindProperty("<LiveReload>k__BackingField");
            pollingInterval = serializedObject.FindProperty("<PollingInterval>k__BackingField");
            clearLogs = serializedObject.FindProperty("<ClearLogs>k__BackingField");
        }

        public override void OnInspectorGUI() {
            serializedObject.Update();
            EditorGUILayout.PropertyField(entryFile, new GUIContent("Entry File"));
            EditorGUILayout.PropertyField(globalObjects, new GUIContent("Global Objects"));
            EditorGUILayout.PropertyField(preloads, new GUIContent("Preloads"));
            EditorGUILayout.PropertyField(styleSheets, new GUIContent("Style Sheets"));

            EditorGUILayout.PropertyField(liveReload, new GUIContent("Live Reload"));
            if (liveReload.boolValue) {
                EditorGUILayout.PropertyField(pollingInterval, new GUIContent("    Polling Interval (ms)"));
                EditorGUILayout.PropertyField(clearLogs, new GUIContent("    Clear Logs on Reload"));
            }

            serializedObject.ApplyModifiedProperties();
        }

        [MenuItem("GameObject/Preact/Preact Renderer", false, 10)]
        public static void CreateRenderer(MenuCommand menuCommand) {
            var assets = AssetDatabase.FindAssets("Preact Renderer Prefab");
            var prefab = AssetDatabase.LoadAssetAtPath<PreactRenderer>(AssetDatabase.GUIDToAssetPath(assets.First()));
            var gameObject = Instantiate(prefab.gameObject);
            gameObject.name = "Preact Renderer";

            GameObjectUtility.SetParentAndAlign(gameObject, menuCommand.context as GameObject);
            Undo.RegisterCreatedObjectUndo(gameObject, "Create " + gameObject.name);
            Selection.activeObject = gameObject;
        }

        [MenuItem("GameObject/Preact/Preact Global", false, 10)]
        public static void CreateGlobal(MenuCommand menuCommand) {
            var assets = AssetDatabase.FindAssets("Preact Global Prefab");
            var prefab = AssetDatabase.LoadAssetAtPath<PreactGlobal>(AssetDatabase.GUIDToAssetPath(assets.First()));
            var gameObject = Instantiate(prefab.gameObject);
            gameObject.name = "Preact Global";

            GameObjectUtility.SetParentAndAlign(gameObject, menuCommand.context as GameObject);
            Undo.RegisterCreatedObjectUndo(gameObject, "Create " + gameObject.name);
            Selection.activeObject = gameObject;
        }
    }
}
