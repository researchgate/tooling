'use strict';

module.exports = (spire, { eslint = 'react', jest = 'react' } = {}) => {
  return {
    extends: [
      [
        'spire-config-default',
        {
          prettier: '@researchgate/prettier-config',
          eslint: `@researchgate/spire-config/eslint/${eslint}`,
          jest: `@researchgate/jest-preset-${jest}`,
        },
      ],
    ],
    plugins: ['spire-plugin-yarn'],
  };
};
