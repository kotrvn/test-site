module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-properties': false
      }
    }),
    require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true }
      }]
    })
  ]
}
