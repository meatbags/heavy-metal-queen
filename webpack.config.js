var path = require('path');
var webpack = require('webpack');
var Uglify = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    'app': './lib/src/js/app.js',
    'app.min': './lib/src/js/app.js'
  },
  output: {
    library: 'hmq',
    libraryTarget: 'var',
    path: path.resolve(__dirname, 'lib/build'),
    filename: '[name].js'
  },
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
  },
  optimization: {
    minimizer: [
      new Uglify({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  stats: {
      colors: true
  }
};
