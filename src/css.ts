import chalk from 'chalk'
import { PathLike } from 'fs'
import { fontBase64 } from './lib/font'
import { css } from './lib/css'
import { Config } from '@iconsauce/config/src/interface/config'

const buildCSS = async (config: Config, list: Map<string, PathLike>): Promise<string> => {
  if (config.verbose) {
    console.info('Creating CSS file')
  }

  const { base64font, dictionary } = await fontBase64(config, list)
  const cssData = css(config, base64font, dictionary)

  if (config.verbose) {
    console.info(`Build finished ${chalk.green('successfully')}`)
  }

  return cssData
}

export {
  buildCSS,
}
