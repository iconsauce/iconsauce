import path from 'path'

const PROJECT_NAME = 'iconsauce'
const TEMP_PATH = path.resolve(__dirname, path.join('..', '..', '.temp'))
const TEMP_CSS_PATH = path.join(TEMP_PATH, `${PROJECT_NAME}.css`)

export {
  PROJECT_NAME,
  TEMP_CSS_PATH,
  TEMP_PATH,
}
