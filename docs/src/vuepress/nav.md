# 导航栏

这里没有直接把配置写在 `config.js` 文件中，而是提取成一个模块，便于后续维护，也避免 `config.js` 文件过于臃肿。

注意事项：

- 所有路径以 / 开头，/ 代表 docs 目录
- 若没有指明具体文件，只有文件夹，则默认会寻找该文件夹下的 `READMED.md` 文档，如 `'/notes/' → '/notes/README.md'`

```js
// .vuepress/nav.js
module.exports = [
  {
    text: 'Resources',
    link: '/notes/xxx/xxxx'
  },
  {
    text: '前端学习',
    items: [
      { text: 'Vue', link: '/notes/vue/vue基础' },
      { text: 'React', link: '/notes/react/react基础' }
    ]
  }
]
```
