/**
 * @styleSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const style = (): TsidebarItem[] => {
  return [
    {
      text: 'CSS',
      items: [
        {
          text: 'CSS选择器',
          link: '/style/css/cssSelector'
        },
        {
          text: 'CSS Modules',
          link: '/style/css/cssModule'
        },
        {
          text: 'CSS隐藏元素',
          link: '/style/css/cssHideElement'
        },
        {
          text: 'CSS定位',
          link: '/style/css/cssPosition'
        },
        {
          text: 'CSS:global',
          link: '/style/css/cssGlobal'
        },
        {
          text: 'CSS浏览器私有前缀',
          link: '/style/css/cssPrivate'
        }
      ]
    },
    {
      text: 'Less',
      items: [
        {
          text: 'Hello Less',
          link: '/style/less/lessHello'
        },
        {
          text: 'Less变量',
          link: '/style/less/lessVariables'
        },
        {
          text: 'Less嵌套',
          link: '/style/less/lessNesting'
        },
        {
          text: 'Less父选择器',
          link: '/style/less/lessParentSelector'
        },
        {
          text: 'Less混合',
          link: '/style/less/lessMixins'
        },
        {
          text: 'Less运算',
          link: '/style/less/lessOperations'
        },
        {
          text: 'Less继承',
          link: '/style/less/lessExtend'
        }
      ]
    },
    {
      text: 'SCSS',
      items: [
        {
          text: 'Hello SCSS',
          link: '/style/scss/scssHello'
        }
      ]
    }
  ]
}
