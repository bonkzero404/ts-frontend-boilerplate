const path = require('path');
let isDev = process.env.NODE_ENV === 'development';

exports.configDevServer = {
  devServer: {
    publicPath: "http://localhost:4000/",
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../", "public"),
    port: 4000
  },
  watch: (isDev ? true : false)
}
