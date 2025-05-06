import chalk from 'chalk'
import { PathLike } from 'fs'
import { mkdir, writeFile } from 'fs/promises'
import path from 'path'
import { copy } from 'fs-extra'

const PROJECT_NAME = 'iconsauce'
const TEMP_PATH = path.resolve(__dirname, path.join('..', '..', '.temp'))
const TEMP_CSS_PATH = path.join(TEMP_PATH, `${PROJECT_NAME}.css`)

/**
 * create the directory path where file should be create
 * @param filePath
 * @returns
 */
function checkFilePath (filePath: PathLike) {
  return mkdir(path.resolve(path.dirname(filePath.toString())), { recursive: true })
}

/**
 * Export a map into a given file
 * @param dictionary a map of type <string, PathLike>
 * @param outputFilePath a path of a file where to export the given map
 * @param verbose if should write info message
 */
async function exportMap (dictionary: Map<any, any>, outputFilePath: PathLike, verbose?: boolean): Promise<void> {
  if( !outputFilePath.toString().endsWith('.json')) {
    throw new Error(chalk.red(`${outputFilePath} is not a json file path`))
  }

  const jsonDictionary = JSON.stringify(Array.from(dictionary.keys()), null, 4)

  await checkFilePath(outputFilePath).catch(error => {
    throw Error(chalk.red(error))
  })

  return writeFile(outputFilePath, jsonDictionary, { encoding: 'utf8' })
    .then(() => {
      if (verbose) {
        console.log(`Build of dictionary file ${chalk.green(outputFilePath)} successfully created`)
      }
    })
    .catch(error => {
      throw Error(chalk.red(error))
    })
}

/**
 * Export svg file icon in a directory
 *
 * @param iconsDictionary a map where key is a selector of icon and value is a path where the icon is
 * @param outputPath output directory path where export svg icon
 * @param verbose if should write info message
 */
async function exportSVG(iconsDictionary: Map<string, PathLike>, outputPath: PathLike, verbose?: boolean): Promise<void> {
  if (verbose) {
    console.info(`Dumping ${chalk.yellow(iconsDictionary.size)} SVG files, please wait...`)
  }

  for (const key of iconsDictionary.keys()) {
    await copy(path.resolve(iconsDictionary.get(key) as string), path.resolve(path.join(outputPath.toString(), `${key}.svg`)), { overwrite: true })
      .catch(error => {
        throw Error(chalk.red(error))
      })
  }

  if (verbose) {
    console.info(`SVGs dump finished ${chalk.green('successfully')}`)
  }
}


export {
  PROJECT_NAME,
  TEMP_CSS_PATH,
  TEMP_PATH,
  checkFilePath,
  exportMap,
  exportSVG,
}
