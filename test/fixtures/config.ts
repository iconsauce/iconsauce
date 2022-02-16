import { Config } from '../../src/interface/config'
import googleMaterialIconsPlugin from '@iconsauce/plugin-material-design-icons-updated'
import materialDesignIconsPlugin from '@iconsauce/plugin-mdi-svg'
import maggioliIconsPlugin from '@iconsauce/plugin-mgg-icons'

export const configTest: Config = {
  content: [
    './src/**/*.{tsx,ts}',
  ],
  fontSize : '24px',
  fontFamily : 'iconsauce',
  plugin: [
    googleMaterialIconsPlugin,
    materialDesignIconsPlugin,
    maggioliIconsPlugin,
  ],
  verbose : false,
  skipWarning : true,
}


