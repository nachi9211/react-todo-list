var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'inline-source-map',
  entry: ['./client/client.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: 'node-modules',
        query: {
          presets: ['react','es2015']
        }
      }
    ]
  }

}

module.exports = config
