'use strict';

module.exports = (spire, { eslint = 'react' } = {}) => {
  process.env.RG_ESLINT_PRESET = eslint;
  return {
    extends: [
      [
        'spire-config-default',
        {
          prettier: require.resolve('@researchgate/prettier-config'),
          eslint: require.resolve('./eslint'),
          jest: require.resolve('@researchgate/jest-preset'),
        },
      ],
    ],
    plugins: ['spire-plugin-yarn'],
  };
};
