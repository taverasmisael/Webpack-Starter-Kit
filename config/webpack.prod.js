const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const UnCSSPlugin = require('uncss-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin');

const CONFIG = require('./config')

module.exports = merge(common, {
  devtool: false,
  plugins: [
    new UglifyJSPlugin({
      compress: { warnings: true, comparisons: true },
      output: { comments: false, ascii_only: true },
      sourceMap: false
    }),
    new UnCSSPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ImageminPlugin(),
    new CleanWebpackPlugin([CONFIG.DIST_FOLDER], { root: CONFIG.BASE_FOLDER }),
    new ZipPlugin({
      filename: CONFIG.APP_NAME
    })
  ]
})
