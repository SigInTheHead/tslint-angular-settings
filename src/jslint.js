const path = require('path');

module.exports = {
  extends: 'tmo-lint-settings',
  rulesDirectory: [
    path.join(path.dirname(require.resolve('codelyzer')), './'),
  ],
  rules: {
    'component-class-suffix': true,
    'component-selector': [true, 'element', 'app', 'kebab-case'],
    'contextual-lifecycle': true,
    'directive-class-suffix': true,
    'directive-selector': [true, 'attribute', 'app', 'camelCase'],
    'no-conflicting-lifecycle': true,
    'no-host-metadata-property': true,
    'no-input-rename': true,
    'no-inputs-metadata-property': true,
    'no-output-native': true,
    'no-output-on-prefix': true,
    'no-output-rename': true,
    'no-outputs-metadata-property': true,
    'template-banana-in-box': true,
    'template-no-negated-async': true,
    'use-lifecycle-interface': true,
    'use-pipe-transform-interface': true,
  }
};
