// 'gm/icon-name || gm/type/icon-name',
// material-design-icons-updated/icons/[type]/communication/ic_[3d_rotation]_24px.svg'
const path = require('path')

module.exports = {
  regex: {
    code: /(gm)(\/{1}[a-z\-]+){1,2}/gm,
    lib: /(([a-zA-Z_\-\/]+\/)(filled|outline|round|sharp)[a-zA-Z_\-\/]+\/ic_([0-9a-zA-Z_]+)_24px.svg)/,
  },
  default: 'filled',
  path: `${path.dirname(require.resolve('material-design-icons-updated'))}/**/*.svg`,
}
