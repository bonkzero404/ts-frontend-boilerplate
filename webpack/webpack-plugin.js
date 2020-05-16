require('dotenv').config();

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OfflinePlugin = require('offline-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

/**
 * ---------------------------------------------------
 * Default plugin var for development and production
 * --------------------------------------------------
 */
const plugin = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    title: process.env.TITLE,
    description: process.env.DESCRIPTION,
    icon_apple_touch: `${process.env.WEB_BASE_PATH}${process.env.ICON_APPLE_TOUCH}`,
    icon_favicon: `${process.env.WEB_BASE_PATH}${process.env.ICON_FAVICON}`,
    manifest_app: `${process.env.WEB_BASE_PATH}${process.env.MANIFEST_APP}`,
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
];


/**
 * ---------------------------------------------
 * Plugins for production mode
 * ---------------------------------------------
 */

/**
 * Copy files from public directory
 */
const copyPlugin = new CopyPlugin({
  patterns: [
    {
      from: process.env.PUBLIC_DEV,
      to: '' ,
      globOptions: {
        ignore: (process.env.ASSETS_COPY_IGNORE.trim() === '' ? [] : process.env.ASSETS_COPY_IGNORE.split(',')),
      },
    }
  ]
});

/**
 * Copy electron main for production
 */
const copyElectron = new CopyPlugin({
  patterns: [
    {
      from: 'electron/main.production.js',
      to: 'main.js' ,
    }
  ]
});

/**
 * Generate to css
 */
const cssExtract = new MiniCssExtractPlugin({
  filename: '[name]-[hash:8].css',
  chunkFilename: '[id]-[hash:8].css',
  ignoreOrder: false, // Enable to remove warnings about conflicting order
});

/**
 * Service worker plugin for production
 */
const sw = new OfflinePlugin({
  externals: [
    `${process.env.WEB_BASE_PATH}favicon.ico`,
    `${process.env.WEB_BASE_PATH}manifest.json`,
  ],
  appShell: process.env.WEB_BASE_PATH,
  publicPath: process.env.WEB_BASE_PATH
});

/**
 * Split plugin for development and production
 */
if (!isDev) {
  plugin.push(sw);
  plugin.push(new webpack.ProgressPlugin());
  plugin.push(new PreloadWebpackPlugin());
  plugin.push(copyPlugin);

  if (process.env.ELECTRON == 'true') {
    plugin.push(copyElectron);
  }
  plugin.push(cssExtract);
} else {
  plugin.push(new webpack.SourceMapDevToolPlugin());
}

module.exports = plugin;


