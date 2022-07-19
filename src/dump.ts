import { IconsauceConfig } from '@iconsauce/config'
import { Config } from '@iconsauce/config/src/interface/config'
import chalk from 'chalk'
import { PathLike } from 'fs'
import path from 'path'
import copy from 'recursive-copy'

const buildDump = async (configuration: Config, iconDictionary: Map<string, PathLike>, outputPath: PathLike): Promise<void> => {
  const config: Config = configuration ?? new IconsauceConfig()

  for (const key of iconDictionary.keys()) {
    await copy(path.resolve(iconDictionary.get(key) as string), path.resolve(path.join(outputPath.toString(), `${key}.svg`)), { overwrite: true })
      .catch(error => {
        throw Error(chalk.red(error))
      })
  }

  if (config.verbose) {
    console.info(`Build of dump SVGs finished ${chalk.green('successfully')}`)
  }

}

export {
  buildDump,
}
