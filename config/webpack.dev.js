/* eslint import/no-extraneous-dependencies: 0 */
import merge from 'webpack-merge'
import Jarvis from 'webpack-jarvis'
import common from './webpack.common'

import { PORT, SOURCE_FOLDER } from './config'

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    contentBase: SOURCE_FOLDER,
    compress: true,
    hot: false,
    port: PORT,
    open: true
  },
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [new Jarvis()]
})
