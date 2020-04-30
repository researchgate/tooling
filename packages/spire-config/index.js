'use strict';

module.exports = (spire, { eslint = 'react' } = {}) => {
  return {
    extends: [
      [
        'spire-config-default',
        {
          prettier: '@researchgate/prettier-config',
          eslint: `@researchgate/spire-config/eslint/${eslint}`,
          jest: '@researchgate/jest-preset',
        },
      ],
    ],
    plugins: ['spire-plugin-yarn'],
  };
};
