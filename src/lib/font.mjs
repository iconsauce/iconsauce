import svgtofont from 'svgtofont'
import path from 'path'
import { copyFile, mkdir } from 'fs/promises'

const TEMP_PATH = path.join('../.temp')
const TEMP_SVG_PATH = path.join(TEMP_PATH, 'svg')
const TEMP_FONT_PATH = path.join(TEMP_PATH, 'font')
const TEMP_CSS_PATH = path.join(TEMP_PATH, 'css')

const moveSvgToTempFolder = async icons => {
  let icon
  for (icon of Object.values(icons)) {
    const iconFileName = icon.split('/').pop()
    await mkdir(TEMP_SVG_PATH, { recursive: true })
    await copyFile(icon, path.join(TEMP_SVG_PATH, iconFileName))
      .catch(err => {
        throw new Error(console.error(err))
      })
  }
}

const font = async (config, icons) => {
  await moveSvgToTempFolder(icons)
  svgtofont({
    website: false,
    fontName: 'omicon',
    src: TEMP_SVG_PATH,
    dist: TEMP_FONT_PATH,
    css: {
      cssPath: TEMP_CSS_PATH,
      fontSize: config.fontSize,
      output: TEMP_CSS_PATH,
    },
    svgicons2svgfont: {
      fontHeight: 1000,
      normalize: true,
    },
  }).then(() => {
    console.log('svgtofont built successfully')
  })
}

export {
  font,
}
