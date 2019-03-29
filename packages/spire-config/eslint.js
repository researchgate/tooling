'use strict';

const preset = process.env.RG_ESLINT_PRESET || 'react';

module.exports = {
  extends: `@researchgate/eslint-config-${preset}`,
  parser: 'babel-eslint',
};
