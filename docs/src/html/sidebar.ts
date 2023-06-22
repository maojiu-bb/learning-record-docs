/**
 * @HtmlSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const html = (): TsidebarItem[] => {
  return [
    {
      text: 'HTML基础',
      items: [
        {
          text: '基本概念',
          link: '/html/base'
        }
      ]
    }
  ]
}
