
import { readdir, rm, readFile } from 'fs/promises'
import { exportMap, exportSVG } from '../src/lib/utils'
import filteredDictionary from './fixtures/filtered-dictionary'
// import dictionary from './fixtures/dictionary'
import { iconsDictionary } from './fixtures/icons'


describe('export functionality', () => {
  const testDirectory = './test/temp'
  afterEach(async () => {
    await rm(testDirectory, { recursive: true, force: true})
  })

  test('export map', async () => {
    const testFile = `${testDirectory}/temp.json`
    await exportMap(iconsDictionary, testFile )
    const file = await readFile(testFile)
    expect(file).toBeDefined()
  })

  test('should throw error when filepath is not a json file path', async () => {
    const testFile = `${testDirectory}`
    const errorMsg = `${testFile} is not a json file path`
    await expect(async () => {
      await exportMap(iconsDictionary, testFile);
    }).rejects.toThrow(errorMsg);
  })

  test('export svg', async () => {
    await exportSVG(filteredDictionary, testDirectory)
    const files = await readdir(testDirectory, {recursive: true})
    filteredDictionary.forEach((icons, path) => {
      expect(files).toContain(`${path}.svg`)
    })
  })
})
