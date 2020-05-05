require('dotenv').config();

const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackLoader = require('./webpack-loader');
const webpackPlugin = require('./webpack-plugin');
const webpackServer = require('./webpack-server');

/**
 * Path source and out for build
 */
const root = path.resolve(__dirname, '..');
const src = path.join(root, process.env.SOURCE_DEV);
const out = path.join(root, process.env.BUILD_DEST);

/**
 * Environment variable
 */
const isDev = process.env.NODE_ENV === 'development'; // Node Environment
const isElectron = (process.env.ELECTRON === 'true'); // Convert to boolean

/**
 * Config set
 */
const target = isElectron ? 'electron-renderer' : 'web';
const mode = (isDev ? 'development' : 'production');
const devtool = (isDev ? 'eval' : false);
const entry = ['@babel/polyfill', 'react-hot-loader/patch', src];

/**
 * Performance build
 * remove warning
 */
const performance = {
  hints: false,
  maxAssetSize: parseInt(process.env.MAX_FILE_ASSET_SIZE),
};

/**
 * Optimization for code split
 */
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

/**
 * odule rules
 */
const moduleRule = {
  rules: [
    webpackLoader.babelTs,
    webpackLoader.css,
    webpackLoader.scss,
    webpackLoader.fonts,
    webpackLoader.images,
  ],
};

/**
 * Resolve filename
 */
const resolve = {
  modules: ['node_modules'],
  extensions: ['.ts', '.tsx', '.js', '.json'],
  alias: {
    'react-dom': '@hot-loader/react-dom',
  },
};

/**
 * Output build
 */
const output = {
  path: isElectron ?
    path.resolve(__dirname, out, process.env.BUILD_DIR_ELECTRON) :
    path.resolve(__dirname, out, process.env.BUILD_DIR_WEB),
  filename: '[name].bundle.js',
  publicPath: process.env.WEB_BASE_PATH
};

/**
 * Main webpack config
 */
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
  plugins: webpackPlugin,
};

module.exports = () => {
  if (isDev) return webpackMerge(common, webpackServer.configDevServer);
  return common;
}
