import fg from 'fast-glob'
import chalk from 'chalk'
import { occurrences } from './lib/occurrences'
import { icons } from './lib/icons'
import { filter } from './lib/filter'
import { PROJECT_NAME } from './lib/utils'
import { fontBase64 } from './lib/font'
import { css } from './lib/css'
import { Config } from './interface/config'
import { LoadConfig } from './lib/loadConfig'

const build = async (configuration?: Config): Promise<string> => {
  const config = configuration ?? new LoadConfig()

  console.info(`${chalk.cyan(PROJECT_NAME)}`)

  if (config.verbose) {
    console.info('Verbose mode enabled')
  }
  const iconDictionary = await icons(config)
  const files = await fg(config.content)

  const selectors = await occurrences(config, files)
  const iconList = filter(config, iconDictionary, selectors)
  const { base64font, dictionary } = await fontBase64(config, iconList)
  const cssData = css(config, base64font, dictionary)

  console.info(`Build finished ${chalk.green('successfully')}`)

  return cssData
}

export {
  build,
}
