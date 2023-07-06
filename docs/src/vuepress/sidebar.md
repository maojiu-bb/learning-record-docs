# 侧边栏

[BruceBlog](https://brucecai55520.gitee.io/bruceblogpages/) 为不同页面显示不同的侧边栏，并且每个页面的侧边栏封装为一个模块便于后续维护。

以 Vue 页面的侧边栏为例：

```js
// .vuepress/sidebar.js
module.exports = {
  '/notes/vue': require('../notes/vue/sidebar'),
  '/notes/react': require('../notes/react/sidebar')
}
```

```js
// notes/vue/sidebar.js
module.exports = [
  {
    title: 'Vue核心基础',
    path: '/notes/vue/vue核心基础'
  },
  {
    title: 'Vuex',
    path: '/notes/vue/vuex'
  },
  {
    title: 'Vue Router',
    path: '/notes/vue/vue-router'
  },
  {
    title: 'Vue3',
    path: '/notes/vue/vue3'
  }
]
```
