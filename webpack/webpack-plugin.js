require('dotenv').config();

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OfflinePlugin = require('offline-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const plugin = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    title: process.env.TITLE,
    template: `${process.env.PUBLIC_DEV}/index.html`,
  }),
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    ELECTRON: (process.env.ELECTRON === 'true'),
    WEB_BASE_PATH: JSON.stringify(process.env.WEB_BASE_PATH)
  }),
  new CompressionPlugin({
    filename: '[path].gz[query]',
    test: /\.(js|css|html|svg|png|jpg|webp|ttf)$/,
    algorithm: "gzip",
    threshold: 8192,
    minRatio: 0.8,
    compressionOptions: { level: 9 },
  }),
]

const copyPlugin = new CopyPlugin([
  {
    from: 'public',
    to: '' ,
    ignore: (process.env.ASSETS_COPY_IGNORE.trim() === '' ? [] : process.env.ASSETS_COPY_IGNORE.split(',')),
  },
]);

const copyElectron = new CopyPlugin([
  {
    from: 'electron/main.production.js',
    to: 'main.js' ,
  },
]);

const cssExtract = new MiniCssExtractPlugin({
  filename: '[name]-[hash:8].css',
  chunkFilename: '[id]-[hash:8].css',
  ignoreOrder: false, // Enable to remove warnings about conflicting order
});

const sw = new OfflinePlugin({
  externals: [
    './favicon.ico',
    './manifest.json',
  ],
  appShell: './',
  publicPath: './'
});

if (!isDev) {
  plugin.push(sw);
  plugin.push(new webpack.ProgressPlugin());
  // plugin.push(new PreloadWebpackPlugin());
  plugin.push(copyPlugin);

  if (process.env.ELECTRON == 'true') {
    plugin.push(copyElectron);
  }
  plugin.push(cssExtract);
} else {
  plugin.push(new webpack.SourceMapDevToolPlugin());
}

module.exports = plugin;


