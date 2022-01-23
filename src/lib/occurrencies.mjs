import { readFile } from 'fs/promises'
import chalk from 'chalk'

const pluginIconFamilies = {
  gm: {
    // 'gm/icon-name || gm/type/icon-name',
    regex: {
      code: /(gm)(\/{1}[a-z\-]+){1,2}/gm,
      icon: /(gm)(\/{1}[a-z\-]+){1,2}/gm,
    },
    default: 'filled',
    types: [
      'filled',
      'outline',
      'round',
      'sharp',
    ],
    path: 'material-design-icons-updated/icons/[type]/[path]/ic_[3d_rotation]_24px.svg',
  },
  mdi: /(mdi)(\/{1}[a-z\-]+){1,2}/gm,
  mgg: /(mgg)(\/{1}[a-z\-]+){1,2}/gm,
}

// /((mdi|gm|mgg)\/([a-z-]*)\/?([a-z-]*)?)+/gm
// /((mdi|gm|mgg)(\/[a-z\-]{2,}){1,2})/gm
// /(mdi|gm|mgg)(\/[a-z\-]{2,})+/gm
// const searchIcons = new RegExp(`((${pluginIconFamilies.join('|')})\/([a-z-]*)\/?([a-z-]*)?)+`, 'gm')
const searchIcons = /(mdi|gm|mgg)(\/{1}[a-z\-]+){1,2}/gm

const occurrencies = async entries => {
  console.info('occurrencies')

  let entry
  let inputIcons = []
  for (entry of entries) {
    const fileContent = await readFile(entry, 'utf8').catch(error => {
      console.error(error)
    })
    inputIcons = [...new Set([...inputIcons, ...fileContent.match(searchIcons)])]
  }
  console.log(inputIcons.sort())
}

export {
  occurrencies,
}
