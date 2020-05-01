'use strict';

const defaults = require('@researchgate/jest-preset-base');

module.exports = {
  ...defaults,
  setupFilesAfterEnv: [require.resolve('./setup-after-env')],
};
