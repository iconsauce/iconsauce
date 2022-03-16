import { PathLike } from 'fs'
import { occurrences } from '../src/lib/occurrences'
import { configTest } from './fixtures/config'
import files from './fixtures/files'

configTest.verbose = true

describe('Occurrences', () => {
  test('Check the selectors are properly loaded from source files', async () => {
    const data: { occurrences: string[], map: Map<string, PathLike> } = await occurrences(configTest, files)
    expect(data.map.get('mi/baseline/close')).toMatch(/component-mi.tsx/)
    expect(data.map.get('mdi/access-point')).toMatch(/component-mdi.tsx/)
    expect(data.map.get('mgg/isbn')).toMatch(/component-mgg.tsx/)
    expect(data.map.get('mi/baseline/accessible-forward')).toMatch(/component.tsx/)
    expect(data.map.get('mgg/todo-in-prendere-in-carico')).toMatch(/variants.ts/)
    expect(new Set(data.occurrences)).toContain('mi/baseline/non-existing-selector')
  })

  test('Check the errors are thrown as expected', async () => {
    await expect(occurrences(configTest, ['non/exisising/file.tsx'])).rejects.toThrow(Error)
  })
})
