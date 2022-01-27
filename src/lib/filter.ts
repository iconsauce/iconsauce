import chalk from 'chalk'
import { PathLike } from 'fs'
import { Config } from '../interface/config'

const filter = (config: Config, dictionary: Map<String, String>, selectors: {occurrences: String[], map: Map<String, PathLike>}) => {
  let occurrence
  const filteredDictionary: Map<String, String> = new Map()
  for (occurrence of selectors.occurrences) {
    if (dictionary.get(occurrence) !== undefined) {
      filteredDictionary.set(occurrence, dictionary.get(occurrence) as String);
    } else {
      if (config.skipWarning) {
        console.error(`Warning: ${chalk.yellow(occurrence)} from ${chalk.blue(selectors.map.get(occurrence))} not found `)
      } else {
        throw Error(`${chalk.red(occurrence)} from ${chalk.blue(selectors.map.get(occurrence))} not found`)
      }
    }
  }
  return filteredDictionary
}

export {
  filter,
}
