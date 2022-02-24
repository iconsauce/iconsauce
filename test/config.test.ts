import { LoadConfig } from '../src/lib/loadConfig'
import { Config } from '../src/interface/config'
import path from 'path'
import { configTest } from './fixtures/config'

describe('Config', () => {
  test('Check LoadConfig loads a config', () => {
    const config: Config = new LoadConfig(path.resolve(__dirname, './fixtures/iconsauce.config.js'))
    expect(config.content).toEqual(configTest.content)
    expect(config.fontFamily).toEqual(configTest.fontFamily)
    expect(config.fontSize).toEqual(configTest.fontSize)
    expect(config.skipWarnings).toEqual(configTest.skipWarnings)
    expect(config.verbose).toEqual(configTest.verbose)
    expect(config.plugin.length).toEqual(configTest.plugin.length)
  })
})
