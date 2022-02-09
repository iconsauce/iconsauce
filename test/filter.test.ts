import { filter } from '../src/lib/filter'
import { defaultConfig } from '../src/lib/utils'
import filteredDictionary from './fixures/filtered-dictionary'
import dictionary from './fixures/dictionary'
import selectors from './fixures/selectors'

describe('Filter', () => {
  test('Check it returns a filtered map of selected icons', () => {
    expect(filter(defaultConfig, dictionary, selectors)).toEqual(filteredDictionary)
  })

  test('Check the errors are thrown as expected', () => {
    defaultConfig.skipWarning = false
    expect(() => filter(defaultConfig, dictionary, selectors)).toThrow(Error)
  })
})
