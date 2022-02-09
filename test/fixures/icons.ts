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
iconsDictionary.set('gm/filled/add-alert', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_add_alert_24px.svg')
iconsDictionary.set('gm/filled/auto-delete', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_auto_delete_24px.svg')
iconsDictionary.set('gm/filled/error', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_error_24px.svg')
iconsDictionary.set('gm/filled/error-outline', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_error_outline_24px.svg')
iconsDictionary.set('gm/filled/notification-important', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_notification_important_24px.svg')
iconsDictionary.set('gm/filled/warning', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_warning_24px.svg')
iconsDictionary.set('gm/filled/warning-amber', '/node_modules/material-design-icons-updated/icons/filled/alert/ic_warning_amber_24px.svg')
iconsDictionary.set('gm/filled/3p', '/node_modules/material-design-icons-updated/icons/filled/communication/ic_3p_24px.svg')
iconsDictionary.set('gm/filled/add-ic-call', '/node_modules/material-design-icons-updated/icons/filled/communication/ic_add_ic_call_24px.svg')
iconsDictionary.set('gm/filled/alternate-email', '/node_modules/material-design-icons-updated/icons/filled/communication/ic_alternate_email_24px.svg')

export {
  iconsSvgPaths,
  iconsDictionary,
}
