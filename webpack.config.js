var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    firstComp: './src/js/firstComp/index.js',
    vendor: ['react']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js/components')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['es2015', { modules: false }]]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ]
};
