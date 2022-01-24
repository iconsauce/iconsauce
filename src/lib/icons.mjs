import fg from 'fast-glob'

const dictionary = async (config, icons) => {
  const iconsDictionary = []
  let icon
  for (icon of icons) {
    if (icon === null) {
      console.log(icon.match(config.regex.lib))
    }
    iconsDictionary.push(
      {
        name: icon,
      },
    )
  }
}

const geticons = async config => {
  let pluginItem
  let icons = []
  for (pluginItem of config.plugin) {
    const entries = await fg(pluginItem.path, { dot: true })
    icons = [...icons, ...entries]
  }
  const iconsDictionary = await dictionary(config, icons)
  // console.log(iconsDictionary)
}

export {
  geticons,
}
