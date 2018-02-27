module.exports = {
  syntax: 'postcss-scss',
  map: false,
  plugins: {
    'postcss-import': { 'glob': true },
    'postcss-strip-inline-comments': {},
    'postcss-nested': {},
    'css-mqpacker': {},
    'autoprefixer': {}
  }
}
