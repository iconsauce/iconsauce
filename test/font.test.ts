import { fontBase64 } from '../src/lib/font'
import { occurrencesCleaned } from './fixtures/selectors'
import { configTest } from './fixtures/config'
import filteredDictionary from './fixtures/filtered-dictionary'
import base64Font from './fixtures/base64-font'

describe('Font', () => {
  test('Check the Base64 generated font', async () => {
    return fontBase64(configTest, filteredDictionary)
      .then(data => {
        expect(data.base64font.length).toEqual(base64Font.length)
      }).catch(error => {
        console.error(error)
      })
  })
  test('Check it throw error cause icons are empty', async () => {
    return fontBase64(configTest, new Map())
      .catch(error => {
        expect(error).toMatch('Error: Icons map cannot be empty')
      })
  })
  test('Check the dictionary generated', async () => {
    return fontBase64(configTest, filteredDictionary)
      .then(data => {
        const keys = Array.from(data.dictionary.keys())
        expect(keys).toEqual(expect.arrayContaining(occurrencesCleaned))
      }).catch(error => {
        console.error(error)
      })
  })
})
