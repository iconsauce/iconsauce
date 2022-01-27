import fg from 'fast-glob'
import chalk from 'chalk'
import { readFile, writeFile } from 'fs/promises'
import { lilconfig } from 'lilconfig'
import { occurrences } from './lib/occurrences'
import { icons } from './lib/icons'
import { filter } from './lib/filter.js'
import { fontBase64 } from './lib/font'
import { css } from './lib/css.js'
import { PROJECT_NAME, PROJECT_PATH, TEMP_CSS_PATH } from './lib/utils.js'
import { Config } from './interface/config'
import { URL } from 'url'
import * as packageJson from '../package.json'

const decorate = (config: any): Config => {
  const defaultInfos = {
    fontFamily: PROJECT_NAME,
  }
  return { ...config, ...defaultInfos }
}

const loadConfig = async (opts: any): Promise<Config> => {
  const options = {
    searchPlaces: [opts.configPath],
    ignoreEmptySearchPlaces: false,
  }
  try {
    const configFile = await lilconfig(PROJECT_NAME, options).search()
    return decorate({ ...configFile?.config, ...opts.cli })
  } catch (error) {
    throw new Error(chalk.red(error))
  }
}

const build = async (opts: any) => {
  // const packageJson = JSON.parse(await readFile(new URL(`${PROJECT_PATH}/package.json`, import.meta.url)))
  console.info(`${chalk.cyan(packageJson.name)} ${packageJson.version}`)
  if (opts.verbose) {
    console.info('Verbose mode enabled')
  }
  const config = await loadConfig(opts)
  const iconDictionary = await icons(config)
  const files = await fg(config.content)
  const selectors = await occurrences(config, files)
  const iconList = filter(config, iconDictionary, selectors)
  const { base64font, dictionary } = await fontBase64(config, iconList)
  const cssData = await css(config, base64font, dictionary)

  await writeFile(TEMP_CSS_PATH, cssData)
    .catch(console.error)

  console.info(`Build finished ${chalk.green('successfully')}`)
}

export {
  build,
}
