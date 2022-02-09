module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  plugin: [
    require('../../src/plugin/google-material-icons.plugin'),
    require('../../src/plugin/mgg-icons.plugin'),
    require('../../src/plugin/mdi-icons.plugin'),
  ],
}
