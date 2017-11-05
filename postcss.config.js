module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-cssnext')({
      browsers: ['>1%', 'last 7 versions', 'Firefox ESR', 'not ie < 8'],
      flexbox: 'no-2009'
    }),
    require('postcss-nested'),
    require('css-mqpacker')
  ]
}
