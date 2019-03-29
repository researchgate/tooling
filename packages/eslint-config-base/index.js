'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'script',
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier', 'import'],
  settings: {
    'import/extensions': ['.js'],
  },
  rules: {
    camelcase: 'error',
    'consistent-return': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'guard-for-in': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': ['error', 'always', { js: 'never' }],
    'import/named': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // Test files
          '**/__tests__/**',
          '**/test/**',
          '**/tests/**',
          '**/*.spec.js',
          // Docs and examples
          '**/docs/**',
          '**/examples/**',
          // Development and build scripts
          '**/dev/**',
          '**/scripts/**',
          // Dot files
          '**/.*.js',
          // Config files
          '**/*.config.js',
          // Build files
          '**/gulpfile.js',
          '**/Gruntfile.js',
        ],
        optionalDependencies: false,
      },
    ],
    'import/no-unresolved': 'error',
    'linebreak-style': ['error', 'unix'],
    'new-cap': [
      'error',
      {
        capIsNewExceptions: ['List', 'Map', 'Set', 'OrderedMap', 'OrderedSet'],
      },
    ],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-dupe-keys': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'off',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-label-var': 'off',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['node_modules'],
      },
    ],
    'no-restricted-modules': [
      'error',
      {
        patterns: ['node_modules'],
      },
    ],
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-throw-literal': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: false }],
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'no-with': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'prettier/prettier': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
          balanced: true,
        },
      },
    ],
    strict: ['error', 'never'],
    yoda: 'error',
  },
  env: {
    es6: true,
  },
};
