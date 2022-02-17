import { PathLike } from 'fs'
import path from 'path'

const map: Map<string, PathLike> = new Map()
map.set('miu/filled/accessible-forward', path.resolve(__dirname, 'files/component.tsx'))
map.set('miu/filled/add-chart', path.resolve(__dirname, 'files/component-gm.tsx'))
map.set('miu/filled/close', path.resolve(__dirname, 'files/component-gm.tsx'))
map.set('miu/filled/error', path.resolve(__dirname, 'files/component-gm.tsx'))
map.set('miu/filled/info', path.resolve(__dirname, 'files/component-gm.tsx'))
map.set('miu/filled/non-existing-selector', path.resolve(__dirname, 'files/variants.ts'))
map.set('miu/filled/remove-shopping-cart', path.resolve(__dirname, 'files/variants.ts'))
map.set('miu/filled/vpn-key', path.resolve(__dirname, 'files/variants.ts'))
map.set('miu/filled/warning', path.resolve(__dirname, 'files/component.tsx'))

const occurrences = [
  'miu/filled/accessible-forward',
  'miu/filled/add-chart',
  'miu/filled/close',
  'miu/filled/error',
  'miu/filled/info',
  'miu/filled/non-existing-selector',
  'miu/filled/remove-shopping-cart',
  'miu/filled/vpn-key',
  'miu/filled/warning',
]

const occurrencesCleaned = [
  'miu/filled/accessible-forward',
  'miu/filled/add-chart',
  'miu/filled/close',
  'miu/filled/error',
  'miu/filled/info',
  'miu/filled/remove-shopping-cart',
  'miu/filled/vpn-key',
  'miu/filled/warning',
]

const selectors = {
  occurrences,
  map,
}

export default selectors
export {
  occurrencesCleaned,
}
