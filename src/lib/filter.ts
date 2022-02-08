import chalk from 'chalk'
import { PathLike } from 'fs'
import { Config } from '../interface/config'

const filter = (config: Config, dictionary: Map<string, PathLike>, selectors: {occurrences: string[], map: Map<string, PathLike>}): Map<string, PathLike> => {
  let occurrence
  const filteredDictionary: Map<string, string> = new Map()
  for (occurrence of selectors.occurrences) {
    if (dictionary.get(occurrence) !== undefined) {
      filteredDictionary.set(occurrence, dictionary.get(occurrence) as string)
    } else {
      if (config.skipWarning) {
        console.info(`Warning: ${chalk.yellow(occurrence)} from ${chalk.blue(selectors.map.get(occurrence))} not found `)
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
