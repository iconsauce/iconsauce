import { PathLike } from 'fs'
import path from 'path'

const map: Map<string, PathLike> = new Map()
map.set('gm/filled/accessible-forward', path.resolve(__dirname, 'files/component.tsx'))
map.set('gm/filled/add-chart', path.resolve(__dirname, 'files/component-gm.tsx'))
map.set('gm/filled/close', path.resolve(__dirname, 'files/component-gm.tsx'))
map.set('gm/filled/error', path.resolve(__dirname, 'files/component-gm.tsx'))
map.set('gm/filled/info', path.resolve(__dirname, 'files/component-gm.tsx'))
map.set('gm/filled/non-existing-selector', path.resolve(__dirname, 'files/variants.ts'))
map.set('gm/filled/remove-shopping-cart', path.resolve(__dirname, 'files/variants.ts'))
map.set('gm/filled/vpn-key', path.resolve(__dirname, 'files/variants.ts'))
map.set('gm/filled/warning', path.resolve(__dirname, 'files/component.tsx'))

const occurrences = [
  'gm/filled/accessible-forward',
  'gm/filled/add-chart',
  'gm/filled/close',
  'gm/filled/error',
  'gm/filled/info',
  'gm/filled/non-existing-selector',
  'gm/filled/remove-shopping-cart',
  'gm/filled/vpn-key',
  'gm/filled/warning',
]

const selectors = {
  occurrences,
  map,
}

export default selectors
