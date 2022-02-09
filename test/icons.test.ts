import { icons, dictionary } from '../src/lib/icons'
import { gmPlugin } from '../src/plugin/google-material-icons.plugin'
import { defaultConfig } from '../src/lib/utils'
import { iconsSvgPaths, iconsDictionary } from './fixures/icons'

describe('Icons', () => {
  test('Converts the icons path array to the icon dictionary', () => {
    expect(dictionary(gmPlugin, iconsSvgPaths)).toEqual(iconsDictionary)
  })

  test('Loads the plugin correctly and return icons dictionary', async () => {
    return icons(defaultConfig)
      .then(data => {
        const results = new Set(Array.from(data.keys()).sort().splice(0, 20))
        expect(results).toContain('gm/filled/2k')
      }).catch(error => {
        console.error(error)
      })
  })
})
