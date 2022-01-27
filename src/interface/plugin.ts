export interface Plugin {
  prefix: String
  regex: {
    code: RegExp
    lib: RegExp
  }
  seletor: [Function: String]
  path: String
}
