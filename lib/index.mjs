import fg from 'fast-glob'
import chalk from 'chalk'
import { readFile } from 'fs/promises'
import { lilconfig } from 'lilconfig'
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
  console.log(`${chalk.cyan(packageJson.name)} ${packageJson.version}`)
  const config = await loadConfig(opts.configPath)
  console.log(config.content)
  const entries = await fg(config.content, { dot: true })
  console.log(entries)
}

export {
  build,
}
