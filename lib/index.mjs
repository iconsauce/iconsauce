// import fg from 'fast-glob'
import chalk from 'chalk'
import { readFile } from 'fs/promises'
import path from 'path'
const PROJECT_PATH = '..'

const loadConfig = async configPath => {
  try {
    return await readFile(path.resolve(configPath), { encoding: 'utf8' })
  } catch (error) {
    console.error(error)
  }
}

const build = async opts => {
  const packageJson = JSON.parse(await readFile(new URL(`${PROJECT_PATH}/package.json`, import.meta.url)))
  console.log(`${chalk.cyan(packageJson.name)} ${packageJson.version}`)
  const config = await loadConfig(opts.configPath)
  console.log(config)
  // const entries = await fg(opts.configPath, { dot: true })
  // console.log(entries[0])
}

export {
  build,
}
