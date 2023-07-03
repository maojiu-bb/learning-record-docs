/**
 * @expressSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const express = (): TsidebarItem[] => {
  return [
    {
      text: 'Express',
      items: [
        {
          text: 'Express 初体验',
          link: '/express/basicUse'
        },
        {
          text: 'Express 路由',
          link: '/express/router'
        },
        {
          text: 'Express 中间件',
          link: '/express/middleware'
        },
        {
          text: 'CORS 跨域资源共享',
          link: '/express/cors'
        }
      ]
    }
  ]
}
