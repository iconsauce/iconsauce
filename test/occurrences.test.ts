import { PathLike } from 'fs'
import { occurrences } from '../src/lib/occurrences'
import { defaultConfig } from '../src/lib/utils'
import chalk from 'chalk'
import files from './fixures/files'

defaultConfig.verbose = true

describe('Occurrences', () => {
  test('Check the selectors are properly loaded from source files', async () => {
    const data: { occurrences: string[], map: Map<string, PathLike> } = await occurrences(defaultConfig, files)
    expect(data.map.get('gm/filled/close')).toMatch(/component-gm.tsx/)
    expect(data.map.get('mdi/access-point')).toMatch(/component-mdi.tsx/)
    expect(data.map.get('mgg/isbn')).toMatch(/component-mgg.tsx/)
    expect(data.map.get('gm/filled/accessible-forward')).toMatch(/component.tsx/)
    expect(data.map.get('mgg/todo-in-prendere-in-carico')).toMatch(/variants.ts/)
    expect(new Set(data.occurrences)).toContain('gm/filled/non-existing-selector')
  })

  // test('Check the errors are thrown as expected', async () => {
  //   try {
  //     await occurrences(defaultConfig, ['non/exisising/file.tsx'])
  //   } catch (error) {
  //     expect(error).toMatch(/Error/)
  //   }
  // })
})
