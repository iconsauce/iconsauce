import { PathLike } from 'fs'
import path from 'path'

const dictionary: Map<string, PathLike> = new Map()

dictionary.set('gm/filled/10k', path.resolve(__dirname, 'icons/ic_10k_24px.svg'))
dictionary.set('gm/filled/1k', path.resolve(__dirname, 'icons/ic_1k_24px.svg'))
dictionary.set('gm/filled/1k-plus', path.resolve(__dirname, 'icons/ic_1k_plus_24px.svg'))
dictionary.set('gm/filled/accessible-forward', path.resolve(__dirname, 'icons/ic_accessible_forward_24px.svg'))
dictionary.set('gm/filled/add-alert', path.resolve(__dirname, 'icons/ic_add_alert_24px.svg'))
dictionary.set('gm/filled/add-chart', path.resolve(__dirname, 'icons/ic_add_chart_24px.svg'))
dictionary.set('gm/filled/auto-delete', path.resolve(__dirname, 'icons/ic_auto_delete_24px.svg'))
dictionary.set('gm/filled/close', path.resolve(__dirname, 'icons/ic_close_24px.svg'))
dictionary.set('gm/filled/error', path.resolve(__dirname, 'icons/ic_error_24px.svg'))
dictionary.set('gm/filled/error-outline', path.resolve(__dirname, 'icons/ic_error_outline_24px.svg'))
dictionary.set('gm/filled/info', path.resolve(__dirname, 'icons/ic_info_24px.svg'))
dictionary.set('gm/filled/mic', path.resolve(__dirname, 'icons/ic_mic_24px.svg'))
dictionary.set('gm/filled/notification-important', path.resolve(__dirname, 'icons/ic_notification_important_24px.svg'))
dictionary.set('gm/filled/remove-shopping-cart', path.resolve(__dirname, 'icons/ic_remove_shopping_cart_24px.svg'))
dictionary.set('gm/filled/transit-enterexit', path.resolve(__dirname, 'icons/ic_transit_enterexit_24px.svg'))
dictionary.set('gm/filled/vpn-key', path.resolve(__dirname, 'icons/ic_vpn_key_24px.svg'))
dictionary.set('gm/filled/warning', path.resolve(__dirname, 'icons/ic_warning_24px.svg'))
dictionary.set('gm/filled/warning-amber', path.resolve(__dirname, 'icons/ic_warning_amber_24px.svg'))
dictionary.set('gm/filled/zoom-out-map', path.resolve(__dirname, 'icons/ic_zoom_out_map_24px.svg'))

export default dictionary
