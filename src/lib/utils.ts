import path from 'path'
const PROJECT_NAME = 'iconsauce'
const PROJECT_PATH = path.join('../')
const TEMP_PATH = path.join(PROJECT_PATH, '.temp')
const TEMP_CSS_PATH = path.join(TEMP_PATH, `${PROJECT_NAME}.css`)

export {
  PROJECT_NAME,
  PROJECT_PATH,
  TEMP_CSS_PATH,
  TEMP_PATH,
}
