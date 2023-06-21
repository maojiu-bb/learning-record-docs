/**
 * @sidebar
 */

import type { Tsidebar } from '../../types/global'

import { webpack } from '../../src/webpack/sidebar'

/**
 *
 * @sidebarConfiguration
 */
export const sidebar = (): Tsidebar => {
  return {
    '/webpack/': webpack()
  }
}
