const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OfflinePlugin = require('offline-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

require('dotenv').config();

let isDev = process.env.NODE_ENV === 'development';

const plugin = {};

plugin.extract = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.ProgressPlugin(),
  new webpack.SourceMapDevToolPlugin(),
  new HtmlWebpackPlugin({
    template: `${process.env.PUBLIC_DEV}/index.html`
  }),

  new OfflinePlugin({
    externals: [
      '/',
      '/favicon.ico',
      '/manifest.json',
      '/logo192.png',
      '/logo512.png',
    ],
    appShell: '/',
    publicPath: '/'
  }),
  new ManifestPlugin({
    name: 'ts-frontend-boilerplate',
    fileName: 'asset-manifest.json',
    isAsset: true
  })
]

const copyPlugin = new CopyPlugin([
  {
    from: 'public',
    to: '' ,
    ignore: (process.env.ASSETS_COPY_IGNORE.trim() === '' ? [] : process.env.ASSETS_COPY_IGNORE.split(',')),
  },
]);

const cssExtract = new MiniCssExtractPlugin({
  filename: 'css/[name]-[hash:8].css',
  chunkFilename: 'css/[id]-[hash:8].css',
  ignoreOrder: false, // Enable to remove warnings about conflicting order
});

if (!isDev) {
  plugin.extract.push(copyPlugin);
  plugin.extract.push(cssExtract);
}

module.exports = plugin;


