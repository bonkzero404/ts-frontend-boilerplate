const path = require('path');
require('dotenv').config();

let isDev = process.env.NODE_ENV === 'development';

exports.configDevServer = {
  devServer: {
    publicPath: process.env.DEV_SERVER,
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../", process.env.PUBLIC_DEV),
    port: process.env.DEV_PORT
  },
  watch: (isDev ? true : false)
}
