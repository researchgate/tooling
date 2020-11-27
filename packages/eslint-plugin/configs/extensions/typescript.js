'use strict';

module.exports = function typescriptConfigExtension(config) {
  config.parserOptions = { ...config.parserOptions, sourceType: 'module' };
  config.settings = {
    ...config.settings,
    'import/extensions': [
      '.ts',
      '.tsx',
      ...(config.settings?.['import/extensions'] || []),
    ],
  };
  config.rules = {
    ...config.rules,
    'import/extensions': [
      'error',
      'always',
      {
        ...(config.rules?.['import/extensions'][2] || {}),
        ts: 'never',
        tsx: 'never',
      },
    ],
    'node/no-unsupported-features': 'off',
    strict: ['error', 'never'],
  };
};
