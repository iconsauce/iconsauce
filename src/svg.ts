import chalk from 'chalk'
import { PathLike } from 'fs'
import copy from 'recursive-copy'
import path from 'path'
import { Config } from '@iconsauce/config/src/interface/config'

const buildSVG = (config: Config, list: Map<string, PathLike>, outputPath: PathLike): void => {
  for (const key of list.keys()) {
    copy(path.resolve(list.get(key) as string), path.resolve(path.join(outputPath.toString(), `${key}.svg`)), { overwrite: true })
      .catch(error => {
        throw Error(chalk.red(error))
      })
  }

  if (config.verbose) {
    console.info(`Build of SVGs finished ${chalk.green('successfully')}`)
  }
}

export {
  buildSVG,
}
