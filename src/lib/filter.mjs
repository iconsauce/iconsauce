import chalk from 'chalk'

const filter = (config, dictionary, selectors) => {
  let occurrence
  const filteredDictionary = {}
  for (occurrence of selectors.occurrences) {
    if (dictionary[occurrence] !== undefined) {
      filteredDictionary[occurrence] = dictionary[occurrence]
    } else {
      if (config.skipWarnings) {
        console.error(`Warning: ${chalk.yellow(occurrence)} from ${chalk.blue(selectors.map[occurrence])} not found `)
      } else {
        throw Error(`${chalk.red(occurrence)} from ${chalk.blue(selectors.map[occurrence])} not found`)
      }
    }
  }
  return filteredDictionary
}

export {
  filter,
}
