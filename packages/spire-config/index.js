'use strict';

module.exports = (spire, { eslint = 'react' } = {}) => {
  return {
    extends: [
      [
        'spire-config-default',
        {
          prettier: '@researchgate/prettier-config',
          eslint: require.resolve(`./eslint/${eslint}`),
          jest: require.resolve('@researchgate/jest-preset'),
        },
      ],
    ],
    plugins: ['spire-plugin-yarn'],
  };
};
