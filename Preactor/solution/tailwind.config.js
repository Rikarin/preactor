const plugin = require('tailwindcss/plugin');
const { theme, paths, plugins: basePlugins, corePlugins } = require('@rikarin/preactor/scripts/tailwind-config.cjs');

module.exports = {
  content: [...paths, '../Assets/Views/**/*.js'],
  theme: theme,
  plugins: [
    ...basePlugins,
    plugin(function ({ addUtilities }) {
      addUtilities({
        // These are some default colors for the UI Toolkit Components such as Select, Toggle, Slider, etc
        '.default-bg-color': { 'background-color': 'white' },
        '.accented-bg-color': { 'background-color': '#fde047' },
        '.hover-bg-color': { 'background-color': 'rgb(0 0 0 / 0.1)' },
        '.default-text-color': { color: '#4b5563' },
        '.active-text-color': { color: '#cd8c06' },
        '.highlighted-text-color': { color: '#854d0e' }
      });
    })
  ],
  corePlugins: corePlugins
};
