const merge = require('webpack-merge')
const common = require('./webpack.common')

const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = merge(common, {
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    new DashboardPlugin()
  ]
})
