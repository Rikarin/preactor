import * as fs from 'fs';
import * as path from 'path';

export const importTransformPlugin = {
  name: 'preactor-import-transform',
  setup(build) {
    // First pass: Mark C# imports as external
    build.onResolve({ filter: /^(UnityEngine|Preactor)/ }, args => {
      return { path: args.path, external: true };
    });

    // Second pass: Transform all JS and TSX files
    build.onLoad({ filter: /\.(js|jsx|ts|tsx)$/ }, async args => {
      let contents = await fs.promises.readFile(args.path, 'utf8');

      // Transform Unity imports
      contents = contents.replace(
        /import\s+(?:{([^}]+)})?\s*from\s*["'](UnityEngine[^"']*|Preactor[^"']*)["'];?/g,
        (match, imports, moduleName) => {
          moduleName = moduleName.replace(/\//g, '.');
          if (imports) {
            const importItems = imports.split(',').map(item => item.trim());
            return `const { ${importItems.join(', ')} } = CS.${moduleName};`;
          } else {
            const namespaceName = moduleName.split('.').pop();
            return `const ${namespaceName} = CS.${moduleName};`;
          }
        }
      );

      // Transform any remaining require statements for Unity modules
      contents = contents.replace(/__require\(["'](UnityEngine[^"']*|Preactor[^"']*)["']\)/g, (match, moduleName) => {
        return `CS.${moduleName.replace(/\//g, '.')}`;
      });

      return { contents, loader: path.extname(args.path).slice(1) };
    });
  }
};
