import { css } from '../src/lib/css'
import dictionary from './fixtures/dictionary'
import cssFont from './fixtures/css-font'
import { configTest } from './fixtures/config'

describe('CSS', () => {
  test('Check the CSS generated is equal to the mock', () => {
    expect(css(configTest, 'AABBCCDDEE', dictionary)).toEqual(cssFont)
  })
})
