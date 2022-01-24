import { readFile } from 'fs/promises'
import chalk from 'chalk'

const sanitize = (plugin, selector) => {
  const selectorItem = selector.split('/')
  selectorItem.splice(1, 0, plugin.default)
  return selectorItem.join('/')
}

const sanitizeSelectors = (plugin, selectors) => {
  let sanitizedSelectors = []
  let selector
  for (selector of selectors) {
    if (selector.split('/').length - 1 === 1) {
      sanitizedSelectors = [...sanitizedSelectors, sanitize(plugin, selector)]
    } else {
      sanitizedSelectors = [...sanitizedSelectors, selector]
    }
  }

  return sanitizedSelectors
}

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
      let selectors = fileContent.match(pluginItem.regex.code)
      if (pluginItem.default !== undefined) {
        selectors = sanitizeSelectors(pluginItem, selectors)
      }
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
