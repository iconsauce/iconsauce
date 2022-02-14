import { dirname } from 'path'
import { Plugin } from '../interface/plugin'

export const mggPlugin: Plugin = {
  prefix: 'mgg',
  regex: {
    code: /(mgg)(\/{1}[0-9a-z-]+){1,2}/gm,
    lib: /([a-zA-Z_\-/]+\/([0-9a-zA-Z_-]+)\.svg)/,
  },
  selector: (path: RegExpMatchArray) => `mgg/${path[2].replace(/[_]+/g, '-')}`,
  path: `${dirname(require.resolve('@maggioli-design-system/svg-icons/package.json'))}/**/*.svg`,
}
