var path = require('path');
var webpack = require('webpack');


var config = {
  entry: { index: 'index' },
  module: {
    loaders: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-hot!elm-webpack?verbose=true&warn=true',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: '[name].js',
  },
  plugins: [
    // // minify & mangle JS/CSS
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   compressor: { warnings: false },
    // }),
    // dedupe modules
    new webpack.optimize.DedupePlugin(),
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.elm'],
  },
};


module.exports = config;
