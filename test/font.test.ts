import { fontBase64 } from '../src/lib/font'
import { occurrencesCleaned } from './fixtures/selectors'
import { configTest } from './fixtures/config'
import filteredDictionary from './fixtures/filtered-dictionary'
import base64Font from './fixtures/base64-font'

describe('Font', () => {
  test('Check the Base64 generated font', async () => {
    const data = await fontBase64(configTest, filteredDictionary)
    console.log(data.base64font)
    expect(data.base64font.length).toEqual(base64Font.length)
  })

  test('Check it throw error cause icons are empty', async () => {
    await expect(fontBase64(configTest, new Map())).rejects.toThrow('Icons map cannot be empty')
  })

  test('Check the dictionary generated', async () => {
    const data = await fontBase64(configTest, filteredDictionary)
    const keys = Array.from(data.dictionary.keys())
    expect(keys).toEqual(occurrencesCleaned)
  })
})
