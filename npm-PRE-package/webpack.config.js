var webpack = require('webpack');
var path = require('path');
const port = 3000;

module.exports = {
  entry: [
    './InputToggle.js'
  ],
    output: {
      filename: 'index.js'
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
  },
    plugins: [
      new webpack.OldWatchingPlugin()
    ]
};
