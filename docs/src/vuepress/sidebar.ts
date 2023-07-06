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
        }
      ]
    }
  ]
}
