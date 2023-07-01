/**
 * @gitSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const git = (): TsidebarItem[] => {
  return [
    {
      text: 'Git 葵花宝典😂',
      items: [
        {
          text: '账户配置',
          link: '/git/accountConfig'
        }
      ]
    }
  ]
}
