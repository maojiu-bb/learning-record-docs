/**
 * @nodejsSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const nodejs = (): TsidebarItem[] => {
  return [
    {
      text: 'Nodejs 基础',
      items: [
        {
          text: 'Buffer 缓冲区',
          link: '/nodejs/buffer'
        }
      ]
    }
  ]
}
