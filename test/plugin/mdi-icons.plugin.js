const path = require('path')
module.exports = {
  prefix: 'mdi',
  regex: {
    code: /(mdi)(\/{1}[a-z\-]+){1,2}/gm,
    lib: /([@[a-zA-Z_\-\/]+\/([0-9a-zA-Z_-]+)\.svg)/,
  },
  selector: path => `mdi/${path[2].replace(/[_]+/g, '-')}`,
  path: `${path.dirname(require.resolve('@mdi/svg/package.json'))}/**/*.svg`,
}
