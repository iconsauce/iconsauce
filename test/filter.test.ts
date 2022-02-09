import { filter } from '../src/lib/filter'
import { defaultConfig } from '../src/lib/utils'
import filteredDictionary from './fixtures/filtered-dictionary'
import dictionary from './fixtures/dictionary'
import selectors from './fixtures/selectors'

describe('Filter', () => {
  test('Check it returns a filtered map of selected icons', () => {
    expect(filter(defaultConfig, dictionary, selectors)).toEqual(filteredDictionary)
  })

  test('Check the errors are thrown as expected', () => {
    defaultConfig.skipWarning = false
    expect(() => filter(defaultConfig, dictionary, selectors)).toThrow(Error)
  })
})
