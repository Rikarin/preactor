export const watchOutputPlugin = {
  name: 'preactor-watch-output',
  setup(build) {
    build.onStart(() => {
      // Clear the terminal
      // process.stdout.write('\x1Bc');
      console.log('[esbuild] starting build...');
    });

    build.onEnd(result => {
      console.log('[esbuild] watching...');
    });
  }
};
