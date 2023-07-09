# 基本配置

关于网站的一些配置都是在`_config.yml`文件中进行配置

## 基本信息配置

```yml
# Site
title: MaoJiu的博客
subtitle: ''
description: 在午夜时分相遇，寻找真实的自己
keywords: blog MaoJiu
author: Mao Jiu
language: zh-CN
timezone: Asia/Shanghai
```

## URL 配置

```yml
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: http://maojiu-bb.github.io/blog
```

## 文件目录配置

```yml
# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:
```

## 分页配置

```yml
# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page
```

## 主题配置

```yml
theme: particlex
```

## 部署配置

```yml
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repo: git@github.com:maojiu-bb/blog.git
  branch: main
```
