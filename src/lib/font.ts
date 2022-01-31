import svg2ttf from 'svg2ttf'
import SVGIcons2SVGFontStream from 'svgicons2svgfont'
import path from 'path'
import chalk from 'chalk'
import { mkdir, readFile } from 'fs/promises'
import { createWriteStream, createReadStream, PathLike, ReadStream } from 'fs'
import { TEMP_PATH, PROJECT_NAME } from './utils.js'
import { Config } from '../interface/config.js'
import { Exception } from 'handlebars'

interface Glyph extends ReadStream{
  metadata: {
    name: string
    unicode: [string]
  }
}

const TEMP_FONT_PATH = path.join(TEMP_PATH, 'font/')
const TEMP_FONT_PATH_SVG = path.join(TEMP_FONT_PATH, `/${PROJECT_NAME}.svg`)

const fontBase64 = async (config: Config, icons: Map<string, PathLike>): Promise<{ base64font: string, dictionary: Map<string, PathLike> }> => {
  await mkdir(TEMP_FONT_PATH, { recursive: true })
    .catch(console.error)
  let startUnicode = 0xea01

  if (icons.size === 0) {
    throw new Exception('icons empty')
  }
  return new Promise(resolve => {
    const fontStream = new SVGIcons2SVGFontStream({
      fontName: config.fontFamily,
    })

    const dictionary: Map<string, PathLike> = new Map()

    for (const iconSelector of icons.keys()) {
      const glyph = createReadStream(path.resolve(icons.get(iconSelector) as string)) as Glyph
      const unicode = String.fromCharCode(startUnicode)
      startUnicode += 1
      glyph.metadata = {
        name: iconSelector,
        unicode: [unicode],
      }
      dictionary.set(iconSelector, unicode)
      fontStream.write(glyph)
    }

    fontStream
      .pipe(createWriteStream(TEMP_FONT_PATH_SVG)
        .on('finish', () => {
          fontTottf().then(base64font => {
            resolve({ base64font, dictionary })
          }).catch(err => {
            console.log(err)
          })
        })
        .on('error', err => {
          throw new Error(chalk.red(err))
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
