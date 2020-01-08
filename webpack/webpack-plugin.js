require('dotenv').config();

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OfflinePlugin = require('offline-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const plugin = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: `${process.env.PUBLIC_DEV}/index.html`
  }),
  new webpack.DefinePlugin({
    API_SERVER: JSON.stringify(process.env.API_SERVER),
    POUCHDB_ENDPOINT: JSON.stringify(process.env.POUCHDB_ENDPOINT),
    POUCHDB_DB: JSON.stringify(process.env.POUCHDB_DB),
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

const cssExtract = new MiniCssExtractPlugin({
  filename: 'css/[name]-[hash:8].css',
  chunkFilename: 'css/[id]-[hash:8].css',
  ignoreOrder: false, // Enable to remove warnings about conflicting order
});

const sw = new OfflinePlugin({
  externals: [
    '/favicon.ico',
    '/manifest.json',
  ],
  appShell: '/',
  publicPath: '/'
});

if (!isDev) {
  plugin.push(sw);
  plugin.push(new webpack.ProgressPlugin());
  plugin.push(new PreloadWebpackPlugin());
  plugin.push(copyPlugin);
  plugin.push(cssExtract);
} else {
  plugin.push(new webpack.SourceMapDevToolPlugin());
}

module.exports = plugin;


