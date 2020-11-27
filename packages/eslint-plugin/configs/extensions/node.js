'use strict';

module.exports = function nodeConfigExtension(config) {
  config.plugins = [...config.plugins, 'node'];
  config.rules = {
    ...config.rules,
    'node/no-deprecated-api': 'error',
    'node/no-unsupported-features': 'error',
    'node/process-exit-as-throw': 'error',
    'node/shebang': 'error',
    strict: ['error', 'global'],
  };
  config.env = {
    ...config.env,
    node: true,
  };
};
