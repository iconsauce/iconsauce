import { icons } from '../src/lib/icons'
import { defaultConfig } from '../src/lib/utils'

defaultConfig.verbose = true

describe('Icons', () => {
  test('Loads the plugin correctly and return icons dictionary', async () => {
    const data = await icons(defaultConfig)
    const results = new Set(Array.from(data.keys()).sort().splice(0, 20))
    expect(results).toContain('gm/filled/2k')
  })
})
