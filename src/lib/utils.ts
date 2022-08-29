import { PathLike } from 'fs'
import { mkdir } from 'fs/promises'
import path from 'path'

const PROJECT_NAME = 'iconsauce'
const TEMP_PATH = path.resolve(__dirname, path.join('..', '..', '.temp'))
const TEMP_CSS_PATH = path.join(TEMP_PATH, `${PROJECT_NAME}.css`)

const checkFilePath = (filePath: PathLike) => {
  return mkdir(path.resolve(path.dirname(filePath.toString())), { recursive: true })
}

export {
  PROJECT_NAME,
  TEMP_CSS_PATH,
  TEMP_PATH,
  checkFilePath,
}
