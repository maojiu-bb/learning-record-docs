import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { juejinSvg, giteeSvg, blogSvg } from './config/socialSvg'

/**
 * @Configuration
 */

export default defineConfig({
  base: '/learning-record-docs/',
  title: 'MaoJiuBlog',
  description: 'A learning recorder docs',
  lang: 'zh-CN',
  srcDir: 'src',
  ignoreDeadLinks: true,
  vite: {
    server: {
      port: 3000,
      host: 'localhost'
    }
  },
  markdown: {
    lineNumbers: true
  },
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'MaoJiuBlog',
    nav: nav(),
    sidebar: sidebar(),
    outline: [2, 3],
    outlineTitle: 'Have a clear structure',
    lastUpdatedText: 'Last Updated',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/maojiu-bb'
      },
      {
        icon: { svg: giteeSvg() },
        link: 'https://gitee.com/maojiubb'
      },
      {
        icon: { svg: juejinSvg() },
        link: 'https://juejin.cn/user/13638078834695'
      },
      {
        icon: { svg: blogSvg() },
        link: 'https://maojiu-bb.github.io/blog/'
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            resetButtonTitle: '重置',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            },
            backButtonTitle: '返回顶部',
            noResultsText: '没有相关结果'
          }
        }
      }
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部'
  }
})
