import { css } from '../src/lib/css'
import dictionary from './fixtures/dictionary'
import cssFont from './fixtures/css-font'
import { configTest } from './fixtures/config'

describe('CSS', () => {
  test('Check the CSS generated is equal to the mock', () => {
    const selectorToUnicodeMap = new Map<string,string>()
    /* mock unicode as a string
    * selectorToUnicodeMap = {
    *  'miu/filled/10k': 'svg'
    * }
    * */
    dictionary.forEach((v,k) => selectorToUnicodeMap.set(k,v.toString().split('.')[1]))
    expect(css(configTest, 'AABBCCDDEE', selectorToUnicodeMap)).toEqual(cssFont)
  })
})
