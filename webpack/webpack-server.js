require('dotenv').config();

const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const devServer = `${process.env.DEV_HOST}:${process.env.DEV_PORT}/`;

exports.configDevServer = {
  devServer: {
    publicPath: devServer,
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../", process.env.PUBLIC_DEV),
    port: process.env.DEV_PORT
  },
  watch: isDev
}
