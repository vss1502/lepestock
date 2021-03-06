const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'main.js'},
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
