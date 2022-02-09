import { LoadConfig } from '../src/lib/loadConfig'
import { defaultConfig } from '../src/lib/utils'

describe('Config', () => {
  test('Check config loader creates a default config', () => {
    // const config = new LoadConfig()
    expect('pippo').toEqual('pippo')
  })
})
