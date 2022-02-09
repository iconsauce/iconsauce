import { fontBase64 } from '../src/lib/font'
import { defaultConfig } from '../src/lib/utils'
import filteredDictionary from './fixures/filtered-dictionary'
import { occurrencesCleaned } from './fixures/selectors'
import base64Font from './fixures/base64-font'

describe('Font', () => {
  test('Check the Base64 generated font', async () => {
    return fontBase64(defaultConfig, filteredDictionary)
      .then(data => {
        expect(data.base64font.length).toEqual(base64Font.length)
      }).catch(error => {
        console.error(error)
      })
  })
  test('Check the dictionary generated', async () => {
    return fontBase64(defaultConfig, filteredDictionary)
      .then(data => {
        const keys = Array.from(data.dictionary.keys())
        expect(keys).toEqual(expect.arrayContaining(occurrencesCleaned))
      }).catch(error => {
        console.error(error)
      })
  })
})
