'use strict';

module.exports = {
  name: 'researchgate',
  setupFilesAfterEnv: [require.resolve('./setup-after-env')],
  modulePathIgnorePatterns: ['<rootDir>/.cache/'],
};
