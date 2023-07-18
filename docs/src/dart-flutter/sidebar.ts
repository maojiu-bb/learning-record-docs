/**
 * @dartFlutterSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const dartFlutter = (): TsidebarItem[] => {
  return [
    {
      text: 'Dart',
      items: [
        {
          text: 'Dart 初体验',
          link: '/dart-flutter/dart/introduce'
        },
        {
          text: '变量与常量',
          link: '/dart-flutter/dart/varAndConst'
        }
      ]
    },
    {
      text: 'Flutter',
      items: [
        {
          text: '',
          link: ''
        }
      ]
    }
  ]
}
