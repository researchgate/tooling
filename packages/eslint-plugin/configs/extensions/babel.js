'use strict';

module.exports = function babelConfigExtension(config) {
  config.parserOptions = { ...config.parserOptions, sourceType: 'module' };
  config.rules = {
    ...config.rules,
    'node/no-unsupported-features': 'off',
    strict: ['error', 'never'],
  };
};
