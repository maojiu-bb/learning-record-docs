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
        },
        {
          text: '本地基本操作',
          link: '/git/localBasicUse'
        },
        {
          text: '比较差异 git diff',
          link: '/git/compareDiff'
        },
        {
          text: '查看日志信息 git log',
          link: '/git/reviewLog'
        }
      ]
    }
  ]
}
