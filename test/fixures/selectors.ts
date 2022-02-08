import { PathLike } from 'fs'

const map: Map<string, PathLike> = new Map()
map.set('gm/filled/accessible-forward', './files/component.tsx')
map.set('gm/filled/add-chart', './files/component-gm.tsx')
map.set('gm/filled/close', './files/component-gm.tsx')
map.set('gm/filled/error', './files/component-gm.tsx')
map.set('gm/filled/info', './files/component-gm.tsx')
map.set('gm/filled/non-existing-selector', './files/variants.ts')
map.set('gm/filled/remove-shopping-cart', './files/variants.ts')
map.set('gm/filled/vpn-key', './files/variants.ts')
map.set('gm/filled/warning', './files/component.tsx')

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
