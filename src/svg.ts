import chalk from 'chalk'
import { PathLike } from 'fs'
import path from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { Config } from '@iconsauce/config/src/interface/config'

const buildSVG = async (config: Config, list: Map<string, PathLike>, outputPath: PathLike): Promise<void> => {

  if (config.verbose) {
    console.info('Creating SVGs')
  }

  await mkdir(path.resolve(path.dirname(outputPath.toString())), { recursive: true })
    .catch(error => {
      throw Error(chalk.red(error))
    })

  for (const key of list.keys()) {
    await copyFile(list.get(key) as PathLike, path.resolve(path.dirname(outputPath.toString()), `${key}.svg`))
  }

  if (config.verbose) {
    console.info(`Build finished ${chalk.green('successfully')}`)
  }
}

export {
  buildSVG,
}
