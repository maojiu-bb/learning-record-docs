/**
 * @nav
 */

import type { Tnav } from '../../types/global'

export const nav = (): Tnav[] => {
  return [
    {
      text: '前端学习',
      items: [
        {
          text: '前端基础',
          items: [
            {
              text: 'HTML',
              link: '/html/index'
            },
            {
              text: 'CSS',
              link: '/style/index'
            },
            {
              text: 'JavaScript',
              link: '/javascript/index'
            }
          ]
        },
        {
          text: '主流框架',
          items: [
            {
              text: 'Vue',
              link: '/vue/index.md'
            },
            {
              text: 'React',
              link: '/react/index.md'
            }
          ]
        },
        {
          text: '多端开发',
          items: [
            {
              text: 'uni-app',
              link: '../uni-app/README.md'
            },
            {
              text: 'React Native',
              link: '../react-native/README.md'
            },
            {
              text: 'Flutter',
              link: '../flutter/README.md'
            }
          ]
        },
        {
          text: '构建工具',
          items: [
            {
              text: 'Webpack',
              link: '/webpack/preface'
            },
            {
              text: 'Vite',
              link: '../vite/README.md'
            }
          ]
        },
        {
          text: '版本控制工具',
          items: [
            {
              text: 'Git',
              link: '/git/index'
            }
          ]
        },
        {
          text: '类型增强',
          items: [
            {
              text: 'TypeScript',
              link: '../typescript/README.md'
            }
          ]
        }
      ]
    },
    {
      text: '服务端',
      items: [
        {
          text: 'Node.js',
          link: '/nodejs/index'
        },
        {
          text: 'Express',
          link: '/express/index'
        }
      ]
    },
    {
      text: '数据库',
      items: [
        {
          text: 'MySQL',
          link: '../mysql/README.md'
        },
        {
          text: 'MongoDB',
          link: '/mongodb/index'
        }
      ]
    },
    {
      text: '静态网站',
      items: [
        {
          text: 'VuePress',
          link: '/vuepress/index'
        },
        {
          text: 'VitePress',
          link: '../vitepress/README.md'
        },
        {
          text: 'Hexo',
          link: '/hexo/index'
        }
      ]
    },
    {
      text: '个人项目',
      link: '../project/README.md'
    },
    {
      text: '资源分享',
      link: '../resource/README.md'
    }
  ]
}
