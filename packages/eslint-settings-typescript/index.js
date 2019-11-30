'use strict';

module.exports = {
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js'],
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js'],
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
