import fg from 'fast-glob'
import chalk from 'chalk'
import { occurrences } from './lib/occurrences'
import { icons } from './lib/icons'
import { filter } from './lib/filter'
import { PROJECT_NAME } from './lib/utils'
import { fontBase64 } from './lib/font'
import { dictionaryFile } from './lib/dictionary'
import { css } from './lib/css'
import { IconsauceConfig } from '@iconsauce/config'
import { Config } from '@iconsauce/config/src/interface/config'

const build = async (configuration?: Config): Promise<string> => {
  const config: Config = configuration ?? new IconsauceConfig()

  console.info(`${chalk.cyan(PROJECT_NAME)}`)

  if (config.verbose) {
    console.info('Verbose mode enabled')
  }
  const iconDictionary = await icons(config)

  if (iconDictionary.size === 0) {
    if (config.verbose) {
      if (config.skipWarnings) {
        console.info(`${chalk.yellow('Warning:')} No icons found in ${chalk.yellow('plugin paths')}, skipping iconsauce build`)
      } else {
        throw Error(`No icons found in ${chalk.red('plugin paths')}, stopping iconsauce build`)
      }
    }
    return ''
  }

  if (config.dictionary) {
    await dictionaryFile(config, Array.from(iconDictionary.keys()))
  }

  const files = await fg(config.content)
  const selectors = await occurrences(config, files)
  const iconList = filter(config, iconDictionary, selectors)

  if (iconList.size === 0) {
    if (config.verbose) {
      console.info('No icons found in your code yet, skipping iconsauce CSS icon font creation')
    }
    return ''
  }
  const { base64font, dictionary } = await fontBase64(config, iconList)
  const cssData = css(config, base64font, dictionary)

  if (config.verbose) {
    console.info(`Build finished ${chalk.green('successfully')}`)
  }

  return cssData
}

export {
  build,
}
