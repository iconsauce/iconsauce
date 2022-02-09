import { LoadConfig } from '../src/lib/loadConfig'
import { defaultConfig } from '../src/lib/utils'
import { Config } from '../src/interface/config'
import path from 'path'

describe('Config', () => {
  test('Check LoadConfig loads a config', () => {
    const config: Config = new LoadConfig(path.resolve(__dirname, './fixtures/iconsauce.config.js'))
    expect(config).toEqual(defaultConfig)
  })
})
