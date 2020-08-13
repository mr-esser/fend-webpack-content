const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/, // NO QUOTES!
        enforce: 'pre',
        exclude: /node_modules/,
        use: [{loader: 'eslint-loader'}]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      }
    ]
  }
};
