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
        },
        {
          text: '目录结构',
          link: '/hexo/directoryStructure'
        },
        {
          text: '基本配置',
          link: '/hexo/basicConfig'
        },
        {
          text: '自定义主题',
          link: '/hexo/theme'
        },
        {
          text: '接入评论系统',
          link: '/hexo/comments'
        },
        {
          text: '部署项目',
          link: '/hexo/deploy'
        }
      ]
    }
  ]
}
