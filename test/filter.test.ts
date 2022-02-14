import { filter } from '../src/lib/filter'
import filteredDictionary from './fixtures/filtered-dictionary'
import dictionary from './fixtures/dictionary'
import selectors from './fixtures/selectors'
import { configTest } from './fixtures/config'

describe('Filter', () => {
  test('Check it returns a filtered map of selected icons', () => {
    expect(filter(configTest, dictionary, selectors)).toEqual(filteredDictionary)
  })

  test('Check the errors are thrown as expected', () => {
    configTest.skipWarning = false
    expect(() => filter(configTest, dictionary, selectors)).toThrow(Error)
  })
})
