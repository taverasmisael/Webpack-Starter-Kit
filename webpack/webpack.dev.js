/* eslint import/no-extraneous-dependencies: 0 */
import merge from 'webpack-merge'
import Jarvis from 'webpack-jarvis'
import common from './webpack.common'

import { PORT, SOURCE_FOLDER } from './config'

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    compress: true,
    contentBase: SOURCE_FOLDER,
    host: '0.0.0.0',
    hot: false,
    open: true,
    port: PORT,
  },
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [new Jarvis()]
})
