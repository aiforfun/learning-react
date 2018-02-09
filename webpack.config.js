var EncodingPlugin = require('webpack-encoding-plugin');
module.exports = {
  entry: [
    __dirname + "/source/App.js"
  ],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  }, module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  },
  plugins: [new EncodingPlugin({
    encoding: 'iso-8859-1'
  })],
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};
