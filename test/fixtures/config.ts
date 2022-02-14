import { Config } from '../../src/interface/config'
import { gmPlugin } from '../../src/plugin/google-material-icons.plugin'
import { mdiPlugin } from '../../src/plugin/mdi-icons.plugin'
import { mggPlugin } from '../../src/plugin/mgg-icons.plugin'

export const configTest: Config = {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  fontSize : '24px',
  fontFamily : 'iconsauce',
  plugin: [ gmPlugin, mdiPlugin, mggPlugin ],
  verbose : false,
  skipWarning : true,
}


