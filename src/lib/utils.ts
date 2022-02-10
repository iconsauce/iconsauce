import path from 'path'
import { Config } from '../interface/config'
import { gmPlugin } from '../plugin/google-material-icons.plugin'
import { mdiPlugin } from '../plugin/mdi-icons.plugin'
import { mggPlugin } from '../plugin/mgg-icons.plugin'

const PROJECT_NAME = 'iconsauce'
const PROJECT_PATH = path.join('./')
const TEMP_PATH = path.resolve(PROJECT_PATH, '.temp')
const TEMP_CSS_PATH = path.join(TEMP_PATH, `${PROJECT_NAME}.css`)
const DEFAULT_CONFIG_PATH = path.join(PROJECT_PATH, './iconsauce.config.js')

export {
  PROJECT_NAME,
  PROJECT_PATH,
  TEMP_CSS_PATH,
  TEMP_PATH,
  DEFAULT_CONFIG_PATH,
}

export const defaultConfig: Config = {
  content : [],
  fontSize : '24px',
  fontFamily : 'iconsauce',
  plugin : [ gmPlugin, mdiPlugin, mggPlugin ],
  verbose : false,
  skipWarning : true,
}
