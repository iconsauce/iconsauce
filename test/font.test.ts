import { fontBase64 } from '../src/lib/font'
import { defaultConfig } from '../src/lib/utils'
import filteredDictionary from './fixures/filtered-dictionary'
import base64Font from './fixures/base64-font'

describe('Font', () => {
  test('Check the Base64 generated font', async () => {
    return fontBase64(defaultConfig, filteredDictionary)
      .then(data => {
        expect(data.base64font).toEqual(base64Font)
        expect(data.dictionary).toEqual('frengo')
      }).catch(error => {
        console.error(error)
      })
  })
})
