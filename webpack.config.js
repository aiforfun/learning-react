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
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};
