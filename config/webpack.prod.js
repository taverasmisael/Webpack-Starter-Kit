/* eslint import/no-extraneous-dependencies: 0 */
import webpack from 'webpack'
import merge from 'webpack-merge'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import UnCSSPlugin from 'uncss-webpack-plugin'
import ImageminPlugin from 'imagemin-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import ZipPlugin from 'zip-webpack-plugin'

import common from './webpack.common'
import { DIST_FOLDER, BASE_FOLDER, APP_NAME } from './config'

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
    new CleanWebpackPlugin([DIST_FOLDER], { root: BASE_FOLDER }),
    new ZipPlugin({
      filename: APP_NAME
    })
  ]
})
