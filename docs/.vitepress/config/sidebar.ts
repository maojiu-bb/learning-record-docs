/**
 * @sidebar
 */

import type { Tsidebar } from '../../types/global'

import { html } from '../../src/html/sidebar'
import { webpack } from '../../src/webpack/sidebar'
import { style } from '../../src/style/sidebar'

/**
 *
 * @sidebarConfiguration
 */
export const sidebar = (): Tsidebar => {
  return {
    '/html/': html(),
    '/style/': style(),
    '/webpack/': webpack()
  }
}
