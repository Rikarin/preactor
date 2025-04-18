const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

let theme = rem2px(defaultTheme);
theme.extend = {
  transitionTimingFunction: {
    DEFAULT: 'ease-in-out',
    'in-out': 'ease-in-out'
  }
};

exports.theme = theme;
exports.paths = [];
exports.plugins = [
  plugin(function ({ addUtilities, matchUtilities, theme }) {
    addUtilities({
      '.font-normal': {
        '-unity-font-style': 'normal'
      },
      '.bold': {
        '-unity-font-style': 'bold'
      },
      '.italic': {
        '-unity-font-style': 'italic'
      },
      '.bold-italic': {
        '-unity-font-style': 'bold-and-italic'
      },
      '.transition-none': { 'transition-property': 'none' },
      '.transition-all': {
        'transition-property': 'all',
        'transition-duration': '150ms'
      },
      '.transition': {
        'transition-property': 'color, background-color, border-color, opacity',
        'transition-duration': '150ms'
      },
      '.transition-colors': {
        'transition-property': 'color, background-color, border-color',
        'transition-duration': '150ms'
      },
      '.transition-opacity': {
        'transition-property': 'opacity',
        'transition-duration': '150ms'
      },
      '.duration-0': { 'transition-duration': '0s' },
      '.duration-75': { 'transition-duration': '75ms' },
      '.duration-100': { 'transition-duration': '100ms' },
      '.duration-150': { 'transition-duration': '150ms' },
      '.duration-200': { 'transition-duration': '200ms' },
      '.duration-300': { 'transition-duration': '300ms' },
      '.duration-500': { 'transition-duration': '500ms' },
      '.duration-700': { 'transition-duration': '700ms' },
      '.duration-1000': { 'transition-duration': '1000ms' },
      '.scale-none': { scale: 'none' },
      '.rotate-none': { rotate: 'none' },
      '.text-left': { '-unity-text-align': 'middle-left' },
      '.text-center': { '-unity-text-align': 'middle-center' },
      '.text-right': { '-unity-text-align': 'middle-right' },
      '.text-upper-left': { '-unity-text-align': 'upper-left' },
      '.text-upper-center': { '-unity-text-align': 'upper-center' },
      '.text-upper-right': { '-unity-text-align': 'upper-right' },
      '.text-lower-left': { '-unity-text-align': 'lower-left' },
      '.text-lower-center': { '-unity-text-align': 'lower-center' },
      '.text-lower-right': { '-unity-text-align': 'lower-right' }
    });

    matchUtilities(
      {
        fontdef: value => ({ '-unity-font-definition': `url("${value}")` })
      },
      {}
    );

    matchUtilities(
      {
        translate: value => ({ translate: value }),
        'translate-x': value => ({ translate: `${value} 0` }),
        'translate-y': value => ({ translate: `0 ${value}` })
      },
      {
        supportsNegativeValues: true,
        values: theme('translate')
      }
    );

    matchUtilities(
      {
        scale: value => ({ scale: value }),
        'scale-x': value => ({ scale: `${value} 1` }),
        'scale-y': value => ({ scale: `1 ${value}` })
      },
      {
        supportsNegativeValues: true,
        values: theme('scale')
      }
    );

    matchUtilities(
      {
        rotate: value => ({ rotate: value })
      },
      {
        supportsNegativeValues: true,
        values: theme('rotate')
      }
    );

    matchUtilities(
      {
        inset: value => ({
          top: value,
          bottom: value,
          left: value,
          right: value
        })
      },
      {
        supportsNegativeValues: true,
        values: theme('inset')
      }
    );
  })
];

// USS don't support dynamic custom properties within rgb()
// which is what is used by Tailwind for opacity scales
// Ref: https://tailwindcss.com/docs/configuration#core-plugins
exports.corePlugins = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'justifyContent',
  'backgroundColor',
  'backgroundImage',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
  'borderColor',
  'borderRadius',
  'borderWidth',
  'colors',
  'textColor',
  'cursor',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'width',
  'height',
  'maxWidth',
  'maxHeight',
  'minWidth',
  'minHeight',
  'margin',
  'padding',
  'opacity',
  'overflow',
  'display',
  'visibility',
  'position',
  'textOverflow',
  'inset'
];

// Replace REM with PX due to Unity's USS limitations
function rem2px(input, fontSize = 16) {
  if (input == null) {
    return input;
  }

  switch (typeof input) {
    case 'object':
      if (Array.isArray(input)) {
        return input.map(val => rem2px(val, fontSize));
      }

      const ret = {};
      for (const key in input) {
        ret[key] = rem2px(input[key], fontSize);
      }

      return ret;

    case 'string':
      return input.replace(/(\d*\.?\d+)rem$/, (_, val) => `${parseFloat(val) * fontSize}px`);

    case 'function':
      return eval(input.toString().replace(/(\d*\.?\d+)rem/g, (_, val) => `${parseFloat(val) * fontSize}px`));

    default:
      return input;
  }
}
