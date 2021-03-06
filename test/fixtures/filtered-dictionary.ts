import { PathLike } from 'fs'
import path from 'path'

const filteredDictionary: Map<string, PathLike> = new Map()

filteredDictionary.set('miu/filled/accessible-forward', path.resolve(__dirname, 'icons/ic_accessible_forward_24px.svg'))
filteredDictionary.set('miu/filled/add-chart', path.resolve(__dirname, 'icons/ic_add_chart_24px.svg'))
filteredDictionary.set('miu/filled/close', path.resolve(__dirname, 'icons/ic_close_24px.svg'))
filteredDictionary.set('miu/filled/error', path.resolve(__dirname, 'icons/ic_error_24px.svg'))
filteredDictionary.set('miu/filled/info', path.resolve(__dirname, 'icons/ic_info_24px.svg'))
filteredDictionary.set('miu/filled/remove-shopping-cart', path.resolve(__dirname, 'icons/ic_remove_shopping_cart_24px.svg'))
filteredDictionary.set('miu/filled/vpn-key', path.resolve(__dirname, 'icons/ic_vpn_key_24px.svg'))
filteredDictionary.set('miu/filled/warning', path.resolve(__dirname, 'icons/ic_warning_24px.svg'))

export default filteredDictionary
