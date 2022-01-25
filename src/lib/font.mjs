import svg2ttf from 'svg2ttf'
import SVGIcons2SVGFontStream from 'svgicons2svgfont'
import path from 'path'
import chalk from 'chalk'
import { mkdir, readFile } from 'fs/promises'
import { createWriteStream, createReadStream } from 'fs'
import { TEMP_PATH } from './utils.mjs'

const TEMP_FONT_PATH = path.join(TEMP_PATH, 'font/')
const TEMP_FONT_PATH_SVG = path.join(TEMP_FONT_PATH, '/omnicon.svg')

const fontBase64 = async (config, icons) => {
  await mkdir(TEMP_FONT_PATH, { recursive: true })
    .catch(console.error)
  let startUnicode = 0xea01

  return new Promise(resolve => {
    const fontStream = new SVGIcons2SVGFontStream({
      fontName: config.fontFamily,
      log: () => {},
    })

    const dictionary = {}
    let iconSelector
    for (iconSelector of Object.keys(icons)) {
      const glyph = createReadStream(path.resolve(icons[iconSelector]))
      const unicode = String.fromCharCode(startUnicode)
      startUnicode += 1
      glyph.metadata = {
        name: iconSelector,
        unicode: [unicode],
      }
      dictionary[iconSelector] = unicode
      fontStream.write(glyph)
    }

    fontStream
      .pipe(createWriteStream(TEMP_FONT_PATH_SVG)
        .on('finish', () => {
          fontTottf().then(base64font => {
            resolve({ base64font, dictionary })
          })
        })
        .on('error', err => {
          throw new Error(console.error(chalk.red(err)))
        }),
      )
    fontStream.end()
  })
}

async function fontTottf () {
  const ttf = svg2ttf(await readFile(TEMP_FONT_PATH_SVG, 'utf8'), {})
  return Buffer.from(ttf.buffer).toString('base64')
}

export {
  fontBase64,
}
