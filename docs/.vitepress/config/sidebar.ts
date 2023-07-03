/**
 * @sidebar
 */

import type { Tsidebar } from '../../types/global'

import { html } from '../../src/html/sidebar'
import { webpack } from '../../src/webpack/sidebar'
import { style } from '../../src/style/sidebar'
import { javascript } from '../../src/javascript/sidebar'
import { vue } from '../../src/vue/sidebar'
import { react } from '../../src/react/sidebar'
import { git } from '../../src/git/sidebar'
import { nodejs } from '../../src/nodejs/sidebar'
import { express } from '../../src/express/sidebar'

/**
 *
 * @sidebarConfiguration
 */
export const sidebar = (): Tsidebar => {
  return {
    '/html/': html(),
    '/style/': style(),
    '/javascript/': javascript(),
    '/vue/': vue(),
    '/react/': react(),
    '/webpack/': webpack(),
    '/git/': git(),
    '/nodejs/': nodejs(),
    '/express/': express()
  }
}
