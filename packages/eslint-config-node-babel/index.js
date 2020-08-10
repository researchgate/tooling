'use strict';

module.exports = {
  extends: '@researchgate/eslint-config-node',
  parserOptions: { sourceType: 'module' },
  rules: {
    'node/no-unsupported-features': 'off',
    strict: ['error', 'never'],
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
