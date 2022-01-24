import fg from 'fast-glob'
import chalk from 'chalk'
import { readFile } from 'fs/promises'
import { lilconfig } from 'lilconfig'
import { occurrences } from './lib/occurrences.mjs'
import { icons } from './lib/icons.mjs'
import { filter } from './lib/filter.mjs'
import { font } from './lib/font.mjs'

const PROJECT_PATH = '..'

const loadConfig = async opts => {
  const options = {
    searchPlaces: [opts.configPath],
    ignoreEmptySearchPlaces: false,
  }
  try {
    const configFile = await lilconfig('omnicon', options).search()
    return { ...configFile.config, ...opts.cli }
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
  const dictionary = await icons(config)
  const files = await fg(config.content, { dot: true })
  const selectors = await occurrences(config, files)
  const iconList = filter(config, dictionary, selectors)
  await font(config, iconList)
}

export {
  build,
}
