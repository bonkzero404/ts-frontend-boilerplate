const webpackMerge = require('webpack-merge');

const loader = require('./webpack-loader');
const wpath = require('./webpack-path');
const plugin = require('./webpack-plugin');
const server = require('./webpack-server');

let config = {};
let isDev = process.env.NODE_ENV === 'development';

const common = {
  mode: (isDev ? 'development' : 'production'),
  devtool: (isDev ? 'eval-source-map' : 'source-map'),
  entry: ['react-hot-loader/patch', wpath.src],
  performance: {
    hints: isDev ? false : 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      loader.babelTs,
      loader.css,
      loader.assets,
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  output: {
    path: wpath.out,
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: plugin.extract
};

switch(isDev) {
  case true:
    config = webpackMerge(common, server.configDevServer);
    break;
  default:
    config = common;
}

module.exports = config;
