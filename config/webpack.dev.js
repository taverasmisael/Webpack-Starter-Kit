/* eslint import/no-extraneous-dependencies: 0 */
import merge from 'webpack-merge'
import Jarvis from 'webpack-jarvis'
import common from './webpack.common'

module.exports = merge(common, {
  devtool: 'source-map',
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [new Jarvis()]
})
