/**
 *
 * @ReactSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const react = (): TsidebarItem[] => {
  return [
    {
      text: 'React基础',
      items: [
        {
          text: '项目搭建',
          link: '/react/react-base/createProject'
        },
        {
          text: 'JSX 语法',
          link: '/react/react-base/jsx'
        }
      ]
    },
    {
      text: 'React 18',
      items: [
        {
          text: 'React新面貌',
          link: '/react/react18/index'
        }
      ]
    },
    {
      text: 'React-Router',
      items: [
        {
          text: 'Hello React-Router',
          link: '/react/react-router/index'
        }
      ]
    },
    {
      text: 'Redux',
      items: [
        {
          text: 'Hello Redux',
          link: '/react/redux/index'
        }
      ]
    },
    {
      text: 'Zustand',
      items: [
        {
          text: 'Hello Zustand',
          link: '/react/zustand/index'
        }
      ]
    }
  ]
}
