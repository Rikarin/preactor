using NUglify;
using System.IO;
using UnityEditor.AssetImporters;
using UnityEngine;

[ScriptedImporter(1, "js")]
public class JavascriptImporter : ScriptedImporter {
    public override void OnImportAsset(AssetImportContext ctx) {
        var content = File.ReadAllText(ctx.assetPath);
        var res = Uglify.Js(content);

        if (res.HasErrors) {
            Debug.LogError($"Cannot uglify {ctx.assetPath}\n\n" + string.Join("\n\n", res.Errors));
            return;
        }

        var subAsset = new TextAsset(res.Code);
        ctx.AddObjectToAsset("text", subAsset);
        ctx.SetMainObject(subAsset);
    }
}
