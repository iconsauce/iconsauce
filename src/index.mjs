import fg from 'fast-glob'
import chalk from 'chalk'
import { readFile, writeFile } from 'fs/promises'
import { lilconfig } from 'lilconfig'
import { occurrences } from './lib/occurrences.mjs'
import { icons } from './lib/icons.js'
import { filter } from './lib/filter.ts/index.js'
import { fontBase64 } from './lib/font.mjs'
import { css } from './lib/css.mjs'
import { PROJECT_NAME, PROJECT_PATH, TEMP_CSS_PATH } from './lib/utils.js'

const decorate = config => {
  const defaultInfos = {
    fontFamily: PROJECT_NAME,
  }
  return { ...config, ...defaultInfos }
}

const loadConfig = async opts => {
  const options = {
    searchPlaces: [opts.configPath],
    ignoreEmptySearchPlaces: false,
  }
  try {
    const configFile = await lilconfig(PROJECT_NAME, options).search()
    return decorate({ ...configFile.config, ...opts.cli })
  } catch (error) {
    console.error(error)
  }
}

const build = async opts => {
  const packageJson = JSON.parse(await readFile(new URL(`${PROJECT_PATH}/package.json`, import.meta.url)))
  console.info(`${chalk.cyan(packageJson.name)} ${packageJson.version}`)
  if (opts.verbose) {
    console.info('Verbose mode enabled')
  }
  const config = await loadConfig(opts)
  const iconDictionary = await icons(config)
  const files = await fg(config.content, { dot: true })
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
