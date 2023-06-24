import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { juejinSvg, giteeSvg } from './config/socialSvg'

/**
 * @Configuration
 */

export default defineConfig({
  title: 'MaoJiuBlog',
  description: 'A learning recorder docs',
  lang: 'zh-CN',
  srcDir: 'src',
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
      }
    ],
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部'
  }
})
