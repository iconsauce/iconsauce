import arg from 'arg'
import { writeFile } from 'fs/promises'
import { build } from './index'
import { LoadConfig } from './lib/loadConfig'
import { TEMP_CSS_PATH } from './lib/utils'

let configPath = './iconsauce.config.js'

const args = arg({
  '--config': String,
  '--verbose': Boolean,
  '--skip-warnings': Boolean,
  '--output': String,
  '-c': '--config',
  '-s': '--skip-warnings',
  '-v': '--verbose',
  '-o': '--output',
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

if (args['--output'] === undefined) {
  args['--output'] = TEMP_CSS_PATH
}

const config = new LoadConfig (configPath, args['--verbose'], args['--skip-warnings'])

build( config).then((data: string) => {
  writeFile(TEMP_CSS_PATH, data)
    .catch(console.error)
}).catch(console.error)
