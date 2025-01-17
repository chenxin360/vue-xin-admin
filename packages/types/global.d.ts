import type { RouteMeta as IRouteMeta } from '@xin-core/typings'

import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta extends IRouteMeta {}
}

export interface XinAdminProAppConfigRaw {
    VITE_GLOB_API_URL: string
}

export interface ApplicationConfig {
    apiURL: string
}

declare global {
    interface Window {
        _XIN_ADMIN_PRO_APP_CONF_: XinAdminProAppConfigRaw
    }
}