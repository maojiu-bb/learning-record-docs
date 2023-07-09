# 接入评论系统

## Giscus

```yml
# https://github.com/giscus/giscus
giscus:
  enable: true
  src: https://giscus.app/client.js
  repo: maojiu-bb/blog
  repoID: R_kgDOJ2GUoQ
  category: Announcements
  categoryID: DIC_kwDOJ2GUoc4CXlfy
  mapping: pathname
  strict: 0
  reactionsEnabled: 1
  emitMetadata: 0
  inputPosition: top
  theme: light
  lang: zh-CN
```

## Gitalk

```yml
# https://github.com/gitalk/gitalk
gitalk:
  enable: false
  clientID: # Default ClientID
  clientSecret: # Default ClientSecret
  repo: # The name of repository of store comments
  owner: # GitHub repo owner
  admin: # GitHub repo owner and collaborators, only these guys can initialize github issues
  language: # en, zh-CN, zh-TW, es-ES, fr, ru, de, pl and ko are currently available
  proxy: # CORS proxy
```

## Waline

```yml
# https://github.com/walinejs/waline
waline:
  enable: false
  serverURL: # Waline server address url, you should set this to your own link
  locale: # Locale: https://waline.js.org/guide/client/i18n.html#locale-option
  commentCount: true # If false, comment count will only be displayed in post page, not in home page
  pageview: false # Pageviews count, Note: You should not enable both `waline.pageview` and `leancloud_visitors`
  emoji: # Custom emoji
    - https://unpkg.com/@waline/emojis@1.2.0/weibo
    - https://unpkg.com/@waline/emojis@1.2.0/alus
    - https://unpkg.com/@waline/emojis@1.2.0/bilibili
    - https://unpkg.com/@waline/emojis@1.2.0/qq
    - https://unpkg.com/@waline/emojis@1.2.0/tieba
    - https://unpkg.com/@waline/emojis@1.2.0/tw-emoji
  meta: # Comment information, valid meta are nick, mail and link
    - nick
    - mail
    - link
  requiredMeta: # Set required meta field, e.g.: [nick] | [nick, mail]
    - nick
  lang: # Language, available values: en-US, zh-CN, zh-TW, pt-BR, ru-RU, jp-JP
  wordLimit: 0 # Word limit, no limit when setting to 0
  login: enable # Whether enable login, can choose from 'enable', 'disable' and 'force'
  pageSize: 10 # Comment per page
```

## Twikoo

```yml
# https://github.com/imaegoo/twikoo
twikoo:
  enable: false
  envID:
  region:
  path: location.pathname
  lang:
```
