import { LoadConfig } from '../src/lib/loadConfig'
import { defaultConfig } from '../src/lib/utils'
import path from 'path'

describe('Config', () => {
  test('Check config loader creates a default config', () => {
    const config = new LoadConfig(path.resolve(__dirname, './fixtures/iconsauce.config.js'))
    expect(config).toEqual(defaultConfig)
  })
})
