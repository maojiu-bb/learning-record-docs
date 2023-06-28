# 编程式导航

声明式导航：

- 通过点击链接实现导航
- 如普通网页点击 `a` 链接，vue 点击 `<router-link>`
  编程式导航：

- 通过调用 API 实现导航
- 普通网页通过 `location.href` 的方式跳转页面也是编程式导航
  `vue-router` 中实现编程式导航的 API ：

- `this.$router.push('hash地址')` ：跳转到指定页面，并增加一条历史记录
- `this.$router.replace('hash地址')` ：跳转页面，但不会新增历史记录，而是替换当前的历史记录
- `this.$router.go(数值)` ：历史记录前进或后退，相当于点击浏览器前进后退箭头
- `this.$router.forward()` ：前进一步
- `this.$router.back()` ：后退一步
