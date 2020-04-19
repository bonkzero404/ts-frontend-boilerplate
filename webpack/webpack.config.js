require('dotenv').config();

const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackLoader = require('./webpack-loader');
const webpackPlugin = require('./webpack-plugin');
const webpackPath = require('./webpack-path');
const webpackServer = require('./webpack-server');

const isDev = process.env.NODE_ENV === 'development';
const isElectron = process.env.ELECTRON;
const target = isElectron == 'true' ? 'electron-renderer' : 'web';
const mode = (isDev ? 'development' : 'production');
const devtool = (isDev ? 'eval' : false);
const entry = ['@babel/polyfill', 'react-hot-loader/patch', webpackPath.src];
const devServer = `${process.env.DEV_HOST}:${process.env.DEV_PORT}/`;

const performance = {
  hints: isDev ? false : 'warning',
  maxAssetSize: 102400,
};

const optimization = {
  splitChunks: {
    cacheGroups: {
      // Split vendor code to its own chunk(s)
      vendors: {
        test: /[\\/]node_modules[\\/]/i,
        chunks: 'all',
      },
      // Split code common to all chunks to its own chunk
      commons: {
        name: 'commons',
        chunks: 'initial',
        minChunks: 2,
      },
    },
  },
  // The runtime should be in its own chunk
  runtimeChunk: {
    name: 'runtime',
  },
};

const moduleRule = {
  rules: [
    webpackLoader.babelTs,
    webpackLoader.css,
    webpackLoader.scss,
    webpackLoader.fonts,
    webpackLoader.images,
  ],
};

const resolve = {
  modules: ['node_modules'],
  extensions: ['.ts', '.tsx', '.js', '.json'],
  alias: {
    'react-dom': '@hot-loader/react-dom',
  },
};


const output = {
  path: isElectron == 'true' ? path.resolve(__dirname, webpackPath.out, 'electron') : path.resolve(__dirname, webpackPath.out, 'web'),
  filename: '[name].bundle.js',
  publicPath: './'
};

const plugins = webpackPlugin;

const common = {
  mode,
  target,
  devtool,
  entry,
  performance,
  optimization,
  module: moduleRule,
  resolve,
  output,
  plugins,
};

module.exports = () => {
  if (isDev) return webpackMerge(common, webpackServer.configDevServer);
  return common;
}
