var icon = require('../lib/index')

let configPath = './iconsauce.config.js'

icon.build({
  configPath,
  cli: {
    verbose: false,
    skipWarnings: false,
  }
})
