import arg from 'arg'
import { build } from './index.mjs'

let configPath = './omnicon.config.js'

const args = arg({
  '--config': String,
  '-c': '--config',
})

if (args['--config']) {
  configPath = args['--config']
}

await build({
  configPath,
})
