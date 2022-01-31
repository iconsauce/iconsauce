module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  // fontSize: '24px',
  plugin: [
    require('./plugin/google-material-icons.plugin.js'),
    // require('./plugin/mgg-icons.plugin.js'),
    // require('./plugin/mdi-icons.plugin.js'),
  ],
}
