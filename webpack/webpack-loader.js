const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
require('dotenv').config();
let isDev = process.env.NODE_ENV === 'development';

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
let css = {}

if (!isDev) {
  css = {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: isDev
        },
      },
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
} else {
  css = {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: 'style-loader',
      },
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
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  };
}

/**
 * Config Assets
 */
const assets = {
  test: /\.(ttf|eot|woff|woff2|jpg|png|gif|bmp|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  include: new RegExp(`${process.env.PUBLIC_DEV}|${process.env.SOURCE_DEV}`), // /public|src/,
  loader: 'url-loader'
}

if (!isDev) {
  assets.options = {
    limit: 100000,
    name: 'assets/[name].[hash:8].[ext]'
  }
}

exports.css = css;
exports.assets = assets;
