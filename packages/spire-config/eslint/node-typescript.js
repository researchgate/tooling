'use strict';

module.exports = {
  extends: `@researchgate/eslint-config-node-typescript`,
  overrides: {
    files: ['**/*.ts', '**/*.tsx'],
    parserOptions: { sourceType: 'module' },
    parser: '@typescript-eslint/parser',
  },
};
