import { PathLike } from 'fs'

export interface IconsaucePlugin {
  prefix: string
  regex: {
    code: RegExp
    lib: RegExp
  }
  selector: (pathIcon: RegExpMatchArray) => string
  path: PathLike
}
