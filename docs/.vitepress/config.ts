import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'

/**
 * @Configuration
 */

export default defineConfig({
  title: 'MaoJiu',
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
  themeConfig: {
    siteTitle: 'MaoJiu',
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
