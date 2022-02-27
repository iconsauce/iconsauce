import chalk from 'chalk'
import path from 'path'
import { writeFile, mkdir } from 'fs/promises'
import { Config } from '@iconsauce/config/src/interface/config'

const dictionaryFile = async (config: Config, dictionary: string[]): Promise<void> => {

  if (config.dictionary === undefined) {
    throw Error(`Dictionary path is ${chalk.red('undefined')}, set a dictionary path to create it.`)
  }

  const dictionaryPath = path.resolve(config.dictionary.toString())
  const jsonDictionary = JSON.stringify(dictionary, null, 4)

  await mkdir(path.resolve(path.dirname(dictionaryPath)), { recursive: true })
    .catch(error => {
      throw Error(chalk.red(error))
    })

  await writeFile(dictionaryPath, jsonDictionary, { encoding: 'utf8' })
    .then(() => {
      if (config.verbose) {
        console.log(`Icons dictionary file ${chalk.green(config.dictionary)} successfully created`)
      }
    })
    .catch(error => {
      throw Error(chalk.red(error))
    })
}

export {
  dictionaryFile,
}
