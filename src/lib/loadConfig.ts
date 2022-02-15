import chalk from 'chalk'
import { lilconfigSync } from 'lilconfig'
import { Config } from '../interface/config'
import { IconsaucePlugin } from '../interface/plugin'
import { gmPlugin } from '../plugin/google-material-icons.plugin'
import { mdiPlugin } from '../plugin/mdi-icons.plugin'
import { mggPlugin } from '../plugin/mgg-icons.plugin'
import { DEFAULT_CONFIG_PATH, PROJECT_NAME, PROJECT_PATH } from './utils'


const defaultConfig: Config = {
  content : [],
  fontSize : '24px',
  fontFamily : 'iconsauce',
  plugin : [ gmPlugin, mdiPlugin, mggPlugin ],
  verbose : false,
  skipWarning : true,
}

export class LoadConfig implements Config {
  content: string[]
  fontSize: string
  fontFamily: string
  plugin: IconsaucePlugin[]
  verbose: boolean
  skipWarning: boolean

  constructor (configPath?: string, verbose?: boolean, skipWarning?: boolean ) {
    const config = _loadConfig(configPath)

    if (config.content.length === 0) {
      throw new Error(chalk.red('Missing required "content" property'))
    }
    this.content = config.content
    this.fontFamily = defaultConfig.fontFamily
    this.fontSize = config.fontSize ?? defaultConfig.fontSize
    this.plugin = config.plugin ?? defaultConfig.plugin
    this.verbose = config.verbose ?? verbose ?? defaultConfig.verbose
    this.skipWarning = config.verbose ?? skipWarning ?? defaultConfig.skipWarning
  }
}

const _loadConfig = (configPath?: string) : Config => {
  const options = {
    searchPlaces: [PROJECT_PATH],
    ignoreEmptySearchPlaces: false,
  }
  try {
    return lilconfigSync(PROJECT_NAME, options).load(configPath ?? DEFAULT_CONFIG_PATH)?.config as Config
  } catch (error) {
    throw new Error(chalk.red(error))
  }
}
