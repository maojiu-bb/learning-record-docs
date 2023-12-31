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
        },
        {
          text: '排序 & 分页',
          link: '/mongodb/sortAndPagination'
        },
        {
          text: '聚合查询',
          link: '/mongodb/aggregate'
        },
        {
          text: '优化索引',
          link: '/mongodb/optimizeIndex'
        },
        {
          text: '权限机制',
          link: '/mongodb/permission'
        },
        {
          text: '备份还原',
          link: '/mongodb/backupRestore'
        },
        {
          text: 'Mongoose',
          link: '/mongodb/mongoose'
        }
      ]
    }
  ]
}
