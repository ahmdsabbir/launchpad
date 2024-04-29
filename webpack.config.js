const path = require('path');

module.exports = {
  entry: './src/scripts/bundle.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/scripts'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};