/**
 * @sidebar
 */

import type { Tsidebar } from '../../types/global'

import { html } from '../../src/html/sidebar'
import { webpack } from '../../src/webpack/sidebar'
import { style } from '../../src/style/sidebar'
import { javascript } from '../../src/javascript/sidebar'

/**
 *
 * @sidebarConfiguration
 */
export const sidebar = (): Tsidebar => {
  return {
    '/html/': html(),
    '/style/': style(),
    '/javascript/': javascript(),
    '/webpack/': webpack()
  }
}
