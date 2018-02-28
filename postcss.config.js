module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      browsers: ['>1%', 'last 7 versions', 'Firefox ESR', 'not ie < 8'],
      flexbox: 'no-2009'
    }),
    require('oldie')
  ]
}
