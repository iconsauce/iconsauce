import { css } from '../src/lib/css'
import { defaultConfig } from '../src/lib/utils'
import dictionary from './fixures/dictionary'
import cssFont from './fixures/css-font'

describe('CSS', () => {
  test('Check the CSS generated is equal to the mock', () => {
    expect(css(defaultConfig, 'AABBCCDDEE', dictionary)).toEqual(cssFont)
  })
})
