'use strict';

const defaults = require('spire-plugin-jest/jest-preset');

module.exports = {
  ...defaults,
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/.cache/'],
  setupFilesAfterEnv: [require.resolve('./setup-after-env')],
};
