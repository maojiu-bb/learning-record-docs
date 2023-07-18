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
          link: '/dart-flutter/dart/var-const'
        },
        {
          text: 'List 和 Map',
          link: '/dart-flutter/dart/List-Map'
        },
        {
          text: '运算符与条件判断',
          link: '/dart-flutter/dart/operator-conditional'
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
