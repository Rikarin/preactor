const tailwindcss = require('tailwindcss');
const ussTransformPlugin = require('@rikarin/preactor/scripts/uss-transform-plugin.cjs');

// Custom logging plugin
const loggingPlugin = {
  postcssPlugin: 'postcss-logging-plugin',
  Once(root, { result }) {
    process.stdout.write('\x1Bc');
    console.log('[tailwindcss] processing started...');
  },
  OnceExit(root, { result }) {
    console.log('[tailwindcss] watching...');
  }
};

module.exports = {
  plugins: [loggingPlugin, tailwindcss('./tailwind.config.js'), ussTransformPlugin()]
};
