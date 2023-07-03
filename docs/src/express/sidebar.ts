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
        }
      ]
    }
  ]
}
