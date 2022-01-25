const path = require('path')
module.exports = {
  prefix: 'mgg',
  regex: {
    code: /(mgg)(\/{1}[a-z\-]+){1,2}/gm,
    lib: /([@[a-zA-Z_\-\/]+\/([0-9a-zA-Z_-]+)\.svg)/,
  },
  key: results => `mgg/${results[3]}/${results[4].replace(/[_]+/g, '-')}`,
  path: `${path.dirname(require.resolve('@maggioli-design-system/svg-icons'))}/**/*.svg`,
}
