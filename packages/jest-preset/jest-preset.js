'use strict';

const defaults = require('spire-plugin-jest/jest-preset');

module.exports = {
  ...defaults,
  setupFilesAfterEnv: [require.resolve('./setup-after-env')],
  modulePathIgnorePatterns: ['<rootDir>/.cache/'],
};
