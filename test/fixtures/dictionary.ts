import { PathLike } from 'fs'
import path from 'path'

const dictionary: Map<string, PathLike> = new Map()

dictionary.set('miu/filled/10k', path.resolve(__dirname, 'icons/ic_10k_24px.svg'))
dictionary.set('miu/filled/1k', path.resolve(__dirname, 'icons/ic_1k_24px.svg'))
dictionary.set('miu/filled/1k-plus', path.resolve(__dirname, 'icons/ic_1k_plus_24px.svg'))
dictionary.set('miu/filled/accessible-forward', path.resolve(__dirname, 'icons/ic_accessible_forward_24px.svg'))
dictionary.set('miu/filled/add-alert', path.resolve(__dirname, 'icons/ic_add_alert_24px.svg'))
dictionary.set('miu/filled/add-chart', path.resolve(__dirname, 'icons/ic_add_chart_24px.svg'))
dictionary.set('miu/filled/auto-delete', path.resolve(__dirname, 'icons/ic_auto_delete_24px.svg'))
dictionary.set('miu/filled/close', path.resolve(__dirname, 'icons/ic_close_24px.svg'))
dictionary.set('miu/filled/error', path.resolve(__dirname, 'icons/ic_error_24px.svg'))
dictionary.set('miu/filled/error-outline', path.resolve(__dirname, 'icons/ic_error_outline_24px.svg'))
dictionary.set('miu/filled/info', path.resolve(__dirname, 'icons/ic_info_24px.svg'))
dictionary.set('miu/filled/mic', path.resolve(__dirname, 'icons/ic_mic_24px.svg'))
dictionary.set('miu/filled/notification-important', path.resolve(__dirname, 'icons/ic_notification_important_24px.svg'))
dictionary.set('miu/filled/remove-shopping-cart', path.resolve(__dirname, 'icons/ic_remove_shopping_cart_24px.svg'))
dictionary.set('miu/filled/transit-enterexit', path.resolve(__dirname, 'icons/ic_transit_enterexit_24px.svg'))
dictionary.set('miu/filled/vpn-key', path.resolve(__dirname, 'icons/ic_vpn_key_24px.svg'))
dictionary.set('miu/filled/warning', path.resolve(__dirname, 'icons/ic_warning_24px.svg'))
dictionary.set('miu/filled/warning-amber', path.resolve(__dirname, 'icons/ic_warning_amber_24px.svg'))
dictionary.set('miu/filled/zoom-out-map', path.resolve(__dirname, 'icons/ic_zoom_out_map_24px.svg'))

export default dictionary
