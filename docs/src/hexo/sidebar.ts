/**
 * @hexoSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const hexo = (): TsidebarItem[] => {
  return [
    {
      text: 'Hexo',
      items: [
        {
          text: '创建项目',
          link: '/hexo/basicUse'
        }
      ]
    }
  ]
}
