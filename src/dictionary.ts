import chalk from 'chalk'
import path from 'path'
import { PathLike } from 'fs'
import { writeFile, mkdir } from 'fs/promises'
import { Config } from '@iconsauce/config/src/interface/config'

const buildDictionary = async (config: Config, dictionary: Map<string, PathLike>, outputPath: PathLike): Promise<void> => {
  const jsonDictionary = JSON.stringify(Array.from(dictionary.keys()), null, 4)

  await mkdir(path.resolve(path.dirname(outputPath.toString())), { recursive: true })
    .catch(error => {
      throw Error(chalk.red(error))
    })

  await writeFile(outputPath, jsonDictionary, { encoding: 'utf8' })
    .then(() => {
      if (config.verbose) {
        console.log(`Build of dictionary file ${chalk.green(outputPath)} successfully created`)
      }
    })
    .catch(error => {
      throw Error(chalk.red(error))
    })
}

export {
  buildDictionary,
}
