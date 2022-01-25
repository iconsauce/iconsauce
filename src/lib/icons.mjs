import fg from 'fast-glob'
import chalk from 'chalk'

const dictionary = (plugin, icons) => {
  const iconsDictionary = {}
  let icon
  for (icon of icons) {
    const iconPath = icon.match(plugin.regex.lib)
    iconsDictionary[plugin.selector(iconPath).toLowerCase()] = icon
  }
  return iconsDictionary
}

const icons = async config => {
  let pluginItem
  let icons = []
  let iconsDictionary = {}
  for (pluginItem of config.plugin) {
    const entries = await fg(pluginItem.path, { dot: true })
    icons = [...icons, ...entries]
    const newIcons = dictionary(pluginItem, icons)
    iconsDictionary = { ...iconsDictionary, ...newIcons }
  }
  if (config.verbose) {
    console.info(`Found ${chalk.green(Object.keys(iconsDictionary).length)} icons from ${chalk.green(config.plugin.length)} ${config.plugin.length === 1 ? 'library' : 'libraries'}`)
  }
  return iconsDictionary
}

export {
  icons,
}
