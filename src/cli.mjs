import arg from 'arg'
import { build } from './index.mjs'

let configPath = './omnicon.config.js'

const args = arg({
  '--config': String,
  '--verbose': Boolean,
  '-c': '--config',
  '-v': '--verbose',
})

if (args['--config']) {
  configPath = args['--config']
}

await build({
  configPath,
  verbose: args['--verbose'],
})
