import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

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
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'MaoJiuBlog',
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/maojiu-bb'
      }
    ]
  }
})
