import chalk from 'chalk'
import { createReadStream, createWriteStream, PathLike, ReadStream } from 'fs'
import { mkdir, readFile } from 'fs/promises'
import path from 'path'
import svg2ttf from 'svg2ttf'
import SVGIcons2SVGFontStream from 'svgicons2svgfont'
import { Config } from '@iconsauce/config/src/interface/config'
import { PROJECT_NAME, TEMP_PATH } from './utils'

interface Glyph extends ReadStream {
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

  return new Promise(( resolve, reject) => {
    if (icons.size === 0) {
      reject(chalk.red('Error: Icons map cannot be empty'))
      return
    }
    const fontStream = new SVGIcons2SVGFontStream({
      centerHorizontally: config.center,
      centerVertically: config.center,
      fixedWidth: true,
      fontHeight: 2048,
      fontName: config.fontFamily,
      fontStyle: 'normal',
      fontWeight: '400',
      log: () => null,
      normalize: false,
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
          fontTottf().then(base64FontGenerated => {
            const base64font = base64FontGenerated.replaceAll(/[=]{1,}$/g, '')
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

const fontTottf = async () => {
  const ttf = svg2ttf(await readFile(TEMP_FONT_PATH_SVG, 'utf8'), {})
  return Buffer.from(ttf.buffer).toString('base64')
}

export {
  fontBase64,
}
