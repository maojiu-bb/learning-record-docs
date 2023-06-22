/**
 * @javascriptSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const javascript = (): TsidebarItem[] => {
  return [
    {
      text: 'Javascript',
      items: [
        {
          text: 'Javascript简介',
          link: '/javascript/jsIntroduce'
        },
        {
          text: 'JavaScript数组',
          link: '/javascript/jsArray'
        },
        {
          text: 'Web Storage浏览器本地存储',
          link: '/javascript/jsWebStorage'
        },
        {
          text: 'JavaScript模块',
          link: '/javascript/jsModule'
        }
      ]
    }
  ]
}
