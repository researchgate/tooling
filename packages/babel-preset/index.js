'use strict';

module.exports = function (context, options = {}) {
  const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';
  const type =
    process.env.BABEL_OUTPUT || (env === 'test' ? 'commonjs' : 'esm');
  if (type !== 'esm' && type !== 'cjs') {
    throw new Error(
      [
        'Invalid value for the `BABEL_OUTPUT` environment variable.',
        'Valid values are "esm", and "cjs". Instead, received:',
        JSON.stringify(type),
      ].join(' ')
    );
  }
  const envOptions = {
    loose: true,
    modules: type === 'cjs' ? 'commonjs' : false,
    ...(options.env || {}),
  };

  return {
    presets: [
      [require.resolve('@babel/preset-env'), envOptions],
      [
        require.resolve('@babel/preset-react'),
        {
          development: env === 'development',
          useBuiltIns: true,
        },
      ],
    ],
    plugins: [
      require.resolve('@babel/plugin-proposal-class-properties'),
      [
        require.resolve('@babel/plugin-proposal-object-rest-spread'),
        { useBuiltIns: true },
      ],
      require.resolve('babel-plugin-lodash'),
      [
        require.resolve('babel-plugin-transform-react-remove-prop-types'),
        {
          mode: 'unsafe-wrap',
        },
      ],
    ],
  };
};
