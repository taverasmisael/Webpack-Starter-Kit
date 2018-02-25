const merge = require('webpack-merge')
const common = require('./webpack.common')

const Jarvis = require('webpack-jarvis')

module.exports = merge(common, {
  devtool: 'source-map',
  stats: {
    colors: true,
    reasons: true,
  },
  plugins: [new Jarvis()],
})
