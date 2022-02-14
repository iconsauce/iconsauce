import { icons } from '../src/lib/icons'
import { configTest } from './fixtures/config'

configTest.verbose = true

describe('Icons', () => {
  test('Loads the plugin correctly and return icons dictionary', async () => {
    const data = await icons(configTest)
    const results = new Set(Array.from(data.keys()).sort().splice(0, 20))
    expect(results).toContain('gm/filled/2k')
  })
})
