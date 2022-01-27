import arg from 'arg'
import { build } from './index'

let configPath = './iconsauce.config.js'

const args = arg({
  '--config': String,
  '--verbose': Boolean,
  '--skip-warnings': Boolean,
  '-c': '--config',
  '-s': '--skip-warnings',
  '-v': '--verbose',
})

if (args['--config']) {
  configPath = args['--config']
}

if (args['--verbose'] === undefined) {
  args['--verbose'] = true
}

if (args['--skip-warnings'] === undefined) {
  args['--skip-warnings'] = true
}

build({
  configPath,
  cli: {
    verbose: args['--verbose'],
    skipWarnings: args['--skip-warnings'],
  },
}).catch(error => {
  throw new Error(error)
})

