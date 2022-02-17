import { PathLike } from 'fs'

const iconsSvgPaths = [
  '/node_modules/material-design-icons-updated/icons/filled/alert/ic_add_alert_24px.svg',
  '/node_modules/material-design-icons-updated/icons/filled/alert/ic_auto_delete_24px.svg',
  '/node_modules/material-design-icons-updated/icons/filled/alert/ic_error_24px.svg',
  '/node_modules/material-design-icons-updated/icons/filled/alert/ic_error_outline_24px.svg',
  '/node_modules/material-design-icons-updated/icons/filled/alert/ic_notification_important_24px.svg',
  '/node_modules/material-design-icons-updated/icons/filled/alert/ic_warning_24px.svg',
  '/node_modules/material-design-icons-updated/icons/filled/alert/ic_warning_amber_24px.svg',
  '/node_modules/material-design-icons-updated/icons/filled/communication/ic_3p_24px.svg',
  '/node_modules/material-design-icons-updated/icons/filled/communication/ic_add_ic_call_24px.svg',
  '/node_modules/material-design-icons-updated/icons/filled/communication/ic_alternate_email_24px.svg',
]

const iconsDictionary: Map<string, PathLike> = new Map()
iconsDictionary.set('miu/filled/add-alert', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_add_alert_24px.svg')
iconsDictionary.set('miu/filled/auto-delete', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_auto_delete_24px.svg')
iconsDictionary.set('miu/filled/error', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_error_24px.svg')
iconsDictionary.set('miu/filled/error-outline', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_error_outline_24px.svg')
iconsDictionary.set('miu/filled/notification-important', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_notification_important_24px.svg')
iconsDictionary.set('miu/filled/warning', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_warning_24px.svg')
iconsDictionary.set('miu/filled/warning-amber', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_warning_amber_24px.svg')
iconsDictionary.set('miu/filled/3p', '/node_modules/material-design-icons-updated/icons/filled/communication/ic_3p_24px.svg')
iconsDictionary.set('miu/filled/add-ic-call', '/node_modules/material-design-icons-updated/icons/filled/communication/ic_add_ic_call_24px.svg')
iconsDictionary.set('miu/filled/alternate-email', '/node_modules/material-design-icons-updated/icons/filled/communication/ic_alternate_email_24px.svg')

export {
  iconsSvgPaths,
  iconsDictionary,
}
