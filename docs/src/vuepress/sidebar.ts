/**
 * @vuepressSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const vuepress = (): TsidebarItem[] => {
  return [
    {
      text: 'VuePress',
      items: [
        {
          text: 'VuePress体验',
          link: '/vuepress/create'
        },
        {
          text: '目录结构',
          link: '/vuepress/directoryStructure'
        },
        {
          text: 'config.js 文件配置',
          link: '/vuepress/config'
        },
        {
          text: '首页',
          link: '/vuepress/homePage'
        },
        {
          text: '导航栏',
          link: '/vuepress/nav'
        },
        {
          text: '侧边栏',
          link: '/vuepress/sidebar'
        },
        {
          text: '修改默认样式',
          link: '/vuepress/style'
        },
        {
          text: 'Emoji 表情',
          link: '/vuepress/emoji'
        },
        {
          text: '避坑',
          link: '/vuepress/avoidPit'
        }
      ]
    }
  ]
}
