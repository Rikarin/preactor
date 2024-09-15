import glob from 'tiny-glob';
import * as esbuild from 'esbuild';
import { importTransformPlugin, watchOutputPlugin } from '@rikarin/preactor/scripts/esbuild/index.mjs';

let entryPoints = await glob('./dist/tsc/Views/**/index.js');
let mainCtx = await esbuild.context({
  entryPoints: entryPoints,
  bundle: true,
  plugins: [importTransformPlugin, watchOutputPlugin],
  inject: ['@rikarin/preactor/dist/index.js'],
  alias: {
    preactor: '@rikarin/preactor',
    preact: '@rikarin/preactor'
  },
  outdir: '../Assets/Views'
});
await mainCtx.watch();
console.log('Watching for changes...');

// Editor not supported, yet
// try {
// 	entryPoints = await glob("./dist/tsc/Editor/**/*.js");
// 	let editorCtx = await esbuild.context({
// 		entryPoints: entryPoints,
// 		bundle: true,
// 		globalName: "_contentScriptReturn",
// 		footer: { js: "_contentScriptReturn.default" },
// 		outdir: "../Assets/Editor/Views",
// 	});
// 	await editorCtx.watch();
// } catch (error) { }
