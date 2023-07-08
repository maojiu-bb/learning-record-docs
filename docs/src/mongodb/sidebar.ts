/**
 * @mongodbSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const mongodb = (): TsidebarItem[] => {
  return [
    {
      text: 'MongoDB',
      items: [
        {
          text: '基本操作',
          link: '/mongodb/basicUse'
        },
        {
          text: '增删改查',
          link: '/mongodb/curd'
        },
        {
          text: 'try catch',
          link: '/mongodb/tryCatch'
        }
      ]
    }
  ]
}
