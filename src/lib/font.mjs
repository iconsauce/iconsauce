import svg2ttf from 'svg2ttf'
import SVGIcons2SVGFontStream from 'svgicons2svgfont'
import path from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { createWriteStream, createReadStream } from 'fs'

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

const fontBase64 = async (config, icons) => {
  const fontStream = new SVGIcons2SVGFontStream({
    fontName: config.fontFamily,
  })
  fontStream
    .pipe(createWriteStream(path.join(TEMP_FONT_PATH, '/hello.svg'))
      .on('finish', () => {
        console.log('Font successfully created!')
      })
      .on('error', err => {
        console.log(err)
      }),
    )

  let iconPath, i
  for (iconPath of Object.values(icons)) {
    i += 1
    const glyph = createReadStream(path.resolve(iconPath))
    glyph.metadata = {
      unicode: [`'\uE00${i}'`],
      name: 'icon1-icon2',
    };
  }

  fontStream.end()
}

export {
  fontBase64,
}
