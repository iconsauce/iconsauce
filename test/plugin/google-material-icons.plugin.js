const path = require('path')
module.exports = {
  prefix: 'gm',
  regex: {
    code: /(gm)(\/{1}[a-z\-]+){1,2}/gm,
    lib: /(([a-zA-Z_\-\/]+\/)(filled|outline|round|sharp)[a-zA-Z_\-\/]+\/ic_([0-9a-zA-Z_]+)_24px\.svg)/,
  },
  selector: path => `gm/${path[3]}/${path[4].replace(/[_]+/g, '-')}`,
  path: `${path.dirname(require.resolve('material-design-icons-updated/package.json'))}/**/+(filled|outline|round|sharp)/**/*_24px.svg`,
}
