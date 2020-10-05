'use strict';

const defaults = require('@researchgate/jest-preset-base');

module.exports = {
  ...defaults,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [require.resolve('./setup-after-env')],
};
