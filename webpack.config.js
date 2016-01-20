var path = require('path')
var webpack = require('webpack')

module.exports = {
  target: 'web',
  entry: [
    './src/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, "lib/client/"),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: false,
    //   minimize: true,
    //   mangle: false
    // })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        exclude: /node_modules/
      }
    ]
  }
}
