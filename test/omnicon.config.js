
const path = require('path')
console.log(path.dirname(require.resolve('material-design-icons-updated')))
console.log(path.dirname(require.resolve('@maggioli-design-system/svg-icons')))

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
