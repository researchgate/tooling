'use strict';

module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'always',
  proseWrap: 'always',
  overrides: [
    {
      files: ['package.json'],
      options: {
        requirePragma: true,
      },
    },
  ],
};
