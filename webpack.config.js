var webpack = require('webpack');
var path = require('path');
const port = 3000;

module.exports = {
  entry: [
    './src/index.js'
  ],
  devServer: {
    inline: true,
    hot: true,
    port: port,
    historyApiFallback: true,
    contentBase: './'
  },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: 'scripts/bundle.js',
      publicPath: 'http://localhost:'+port,
    },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-1', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
