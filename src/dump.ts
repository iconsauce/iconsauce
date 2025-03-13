import { IconsauceConfig } from '@iconsauce/config'
import { Config } from '@iconsauce/config/lib/interface/config'
import chalk from 'chalk'
import { PathLike } from 'fs'
import path from 'path'
import copy from 'recursive-copy'

const buildDump = async (configuration: Config, iconsDictionary: Map<string, PathLike>, outputPath: PathLike): Promise<void> => {
  const config: Config = configuration ?? new IconsauceConfig()

  if (config.verbose) {
    console.info(`Dumping ${chalk.yellow(iconsDictionary.size)} SVG files, please wait...`)
  }

  for (const key of iconsDictionary.keys()) {
    await copy(path.resolve(iconsDictionary.get(key) as string), path.resolve(path.join(outputPath.toString(), `${key}.svg`)), { overwrite: true })
      .catch(error => {
        throw Error(chalk.red(error))
      })
  }

  if (config.verbose) {
    console.info(`SVGs dump finished ${chalk.green('successfully')}`)
  }

}

export {
  buildDump,
}
