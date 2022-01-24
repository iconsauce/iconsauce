import fg from 'fast-glob'
import chalk from 'chalk'
import { readFile } from 'fs/promises'
import { lilconfig } from 'lilconfig'
import { occurrencies } from './lib/occurrencies.mjs'
import { geticons } from './lib/icons.mjs'

const PROJECT_PATH = '..'

const loadConfig = async configPath => {
  const options = {
    searchPlaces: [configPath],
    ignoreEmptySearchPlaces: false,
  }
  try {
    const configFile = await lilconfig('omnicon', options).search()
    return configFile.config
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
  const config = await loadConfig(opts.configPath)
  // console.log(config)
  const icons = await geticons(config)
  console.log(icons)
  const entries = await fg(config.content, { dot: true })
  await occurrencies(entries)
}

export {
  build,
}
