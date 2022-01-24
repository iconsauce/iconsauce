import { readFile } from 'fs/promises'
import chalk from 'chalk'

const occurrences = async (config, files) => {
  let file, pluginItem
  let inputIcons = []
  const filesMap = {}
  let selector
  for (file of files) {
    const fileContent = await readFile(file, 'utf8').catch(error => {
      console.error(error)
    })
    for (pluginItem of config.plugin) {
      const selectors = fileContent.match(pluginItem.regex.code)
      for (selector of selectors) {
        filesMap[selector] = file
      }
      inputIcons = [...new Set([...inputIcons, ...selectors])]
    }
  }

  if (config.verbose) {
    console.info(`Found ${chalk.green(inputIcons.length)} selectors from ${chalk.green(files.length)} ${files.length === 1 ? 'file' : 'files'}`)
  }

  return {
    occurrences: inputIcons.sort(),
    map: filesMap,
  }
}

export {
  occurrences,
}
