import { PathLike } from "fs";

export interface Plugin {
  prefix: string
  regex: {
    code: RegExp
    lib: RegExp
  }
  selector: (pathIcon: RegExpMatchArray) => string
  path: PathLike
}
