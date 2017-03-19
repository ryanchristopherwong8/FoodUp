/*
    ./webpack.config.js
*/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }

    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      /**
      * HtmlWebpackPlugin will make sure out JavaScript files are being called
      * from within our index.html
      */
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body',
      }),
    ],
}