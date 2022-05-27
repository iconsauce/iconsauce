#!/usr/bin/env node
import arg from 'arg'
import chalk from 'chalk'
import { PathLike } from 'fs'
import { writeFile } from 'fs/promises'
import { IconsauceConfig } from '@iconsauce/config'
import { build } from './build'
import { buildCSS, buildDictionary, buildSVG } from './index'
import { name, version } from '../package.json'
import path from 'path'
let configPath = `.${path.sep}iconsauce.config.js`

const args = arg({
  '--config': String,
  '--output-css': String,
  '--output-dictionary': String,
  '--output-svg': String,
  '--skip-warnings': Boolean,
  '--verbose': Boolean,
  '-c': '--config',
  '-oc': '--output-css',
  '-od': '--output-dictionary',
  '-os': '--output-svg',
  '-s': '--skip-warnings',
  '-v': '--verbose',
})

if (args['--config']) {
  configPath = args['--config']
}

if (args['--skip-warnings'] === undefined) {
  args['--skip-warnings'] = true
}

if (args['--verbose'] === undefined) {
  args['--verbose'] = false
}

const config = new IconsauceConfig (configPath, args['--skip-warnings'], args['--verbose'])

console.info(chalk.cyan(name))
console.info(chalk.cyan(`v${String(version)}`))

build(config).then((data: { dictionary: Map<string, PathLike>, list: Map<string, PathLike> } | undefined) => {
  if (data === undefined) {
    return
  }

  if (args['--output-dictionary'] !== undefined) {
    buildDictionary(config, data.list, args['--output-dictionary'])
      .catch(console.error)
  }

  if (args['--output-svg'] !== undefined) {
    buildSVG(config, data.list, args['--output-svg'])
  }

  if (args['--output-css'] !== undefined) {
    buildCSS(config, data.list).then((data: string) => {
      writeFile(args['--output-css'] as PathLike, data)
        .catch(console.error)
    }).catch(console.error)
  }
}).catch(console.error)
