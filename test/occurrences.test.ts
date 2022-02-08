import { occurrences } from '../src/lib/occurrences'
import { defaultConfig } from '../src/lib/utils'
import files from './fixures/files'

describe('Occurrences', () => {
  test('Check the selectors are properly loaded from source files', async () => {
    return occurrences(defaultConfig, files)
      .then(data => {
        expect(data.map.get('gm/filled/close')).toMatch(/component-gm.tsx/)
        expect(data.map.get('mdi/access-point')).toMatch(/component-mdi.tsx/)
        expect(data.map.get('mgg/isbn')).toMatch(/component-mgg.tsx/)
        expect(data.map.get('gm/filled/accessible-forward')).toMatch(/component.tsx/)
        expect(data.map.get('mgg/todo-in-prendere-in-carico')).toMatch(/variants.ts/)
        expect(new Set(data.occurrences)).toContain('gm/filled/non-existing-selector')
      }).catch(error => {
        console.error(error)
      })
  })

  // test('Check the errors are thrown as expected', async () => {
  //   return expect(async () => await occurrences(defaultConfig, ['non/exisising/file.tsx'])).toThrow(Error)
  // })
})
