import { css } from '../../src/lib/css'
import { defaultConfig } from '../../src/lib/utils'
import dictionary from './fixtures/css.dictionary'
import cssString from './fixtures/css.font'

describe('CSS', () => {
  test('Check the CSS generated is equal to the mock', () => {
    expect(css(defaultConfig, 'AABBCCDDEE', dictionary)).toEqual(cssString)
  })
})
