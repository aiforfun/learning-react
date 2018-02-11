module.exports = {
  entry: [
    __dirname + '/browser.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  }, module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
    }]
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};