'use strict';

module.exports = {
  extends: ['@researchgate/eslint-config-base'],
  parserOptions: { sourceType: 'module' },
  plugins: ['react', 'react-hooks'],
  rules: {
    'import/no-nodejs-modules': ['error', { allow: ['events'] }],
    'react/display-name': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-handler-names': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowBind: false,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': 'error',
    'react/prop-types': ['error', { ignore: ['dispatch'] }],
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  env: {
    browser: true,
    commonjs: true,
    'shared-node-browser': true,
  },
  overrides: [
    {
      files: ['**/.eslintrc.js', '**/*.config.js'],
      rules: {
        strict: ['error', 'global'],
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
};
