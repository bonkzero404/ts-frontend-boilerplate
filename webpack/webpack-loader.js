require('dotenv').config();

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';

/**
 * Function Loader Extract
 */
const cssLoaderExtract = () => {
  if (isDev) return { loader: 'style-loader' };

  return {
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: isDev
    },
  }
}

/**
 * Babel Config
 */
exports.babelTs = {
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  include: new RegExp(`${process.env.SOURCE_DEV}`),
  use: [
    {
      loader: 'babel-loader'
    },
    {
      loader: 'ts-loader'
    },
  ]
}

/**
 * CSS or SCSS or LESS Config
 */
exports.css = {
  test: /\.css$/,
  use: [
    cssLoaderExtract(),
    {
      loader: 'css-loader',
    },
    'postcss-loader',
    'sass-loader',
  ],
};

exports.scss = {
  test: /\.(sa|sc)ss$/,
  use: [
    cssLoaderExtract(),
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: {
          mode: 'local',
          localIdentName: '[name]__[local]--[hash:base64:5]'
        }
      },
    },
    'postcss-loader',
    'sass-loader',
  ],
};

/**
 * Config Assets
 */
exports.fonts = {
  test: /\.(ttf|eot|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  include: new RegExp(`${process.env.SOURCE_DEV}`), // /public|src/,
  loader: isDev ? 'url-loader' : 'file-loader',
  options: {
    limit: 100000,
    name: 'fonts/[name].[hash:8].[ext]'
  }
}

exports.images = {
  test: /\.(jpg|png|gif|bmp|svg|webp)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  include: new RegExp(`${process.env.SOURCE_DEV}`), // /public|src/,
  loader: isDev ? 'url-loader' : 'file-loader',
  options: {
    limit: 100000,
    name: 'images/[name].[hash:8].[ext]'
  }
}
