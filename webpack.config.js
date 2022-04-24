/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  // mode: 'production',
  // devtool: 'source-map',

  entry: path.join(__dirname, '/client/index.jsx'),
  output: {
    path: path.join(__dirname, '/public/dist/'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
