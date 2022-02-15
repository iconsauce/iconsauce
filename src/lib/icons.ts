import fg from 'fast-glob'
import chalk from 'chalk'
import { IconsaucePlugin } from '../interface/plugin'
import { Config } from '../interface/config'
import { PathLike } from 'fs'

const dictionary = (plugin: IconsaucePlugin, icons: PathLike[]) => {
  const iconsDictionary: Map<string, PathLike> = new Map()
  let icon
  for (icon of icons) {
    const iconPath = icon.toString().match(plugin.regex.lib) as RegExpMatchArray
    iconsDictionary.set(plugin.selector(iconPath).toLowerCase(), icon)
  }
  return iconsDictionary
}

const icons = async (config: Config): Promise<Map<string, PathLike>> => {
  let pluginItem
  let icons: PathLike[] = []
  let iconsDictionary: Map<string, PathLike> = new Map()
  for (pluginItem of config.plugin) {
    const entries = await fg(pluginItem.path.toString(), { dot: true })
    icons = [...icons, ...entries]
    const newIcons = dictionary(pluginItem, icons)
    iconsDictionary = new Map([ ...iconsDictionary, ...newIcons ])
  }
  if (config.verbose) {
    console.info(`Found ${chalk.green(iconsDictionary.size)} icons from ${chalk.green(config.plugin.length)} ${config.plugin.length === 1 ? 'library' : 'libraries'}`)
  }
  return iconsDictionary
}

export {
  icons,
}
