module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  fontSize: '24px',
  plugin: [
    // require('./plugin/google-material-icons.plugin.js'),
    require('./plugin/maggioli-design-system-svg-icons.plugin.js'),
  ],
}
