/**
 * @gitSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const git = (): TsidebarItem[] => {
  return [
    {
      text: 'Git 葵花宝典😂',
      items: [
        {
          text: '账户配置',
          link: '/git/accountConfig'
        },
        {
          text: '本地基本操作',
          link: '/git/localBasicUse'
        },
        {
          text: '比较差异 git diff',
          link: '/git/compareDiff'
        },
        {
          text: '查看日志信息 git log',
          link: '/git/reviewLog'
        },
        {
          text: '分支命令',
          link: '/git/branch'
        },
        {
          text: '版本穿梭与回滚',
          link: '/git/version'
        },
        {
          text: '修改 commit 记录',
          link: '/git/changeCommit'
        },
        {
          text: '远程仓库交互',
          link: '/git/remote'
        }
      ]
    }
  ]
}
