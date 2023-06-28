# 路由元信息 meta

在 `meta` 中可以为路由添加自定义信息：

```js
const routes = [
  {
    name: 'about',
    path: '/about',
    component: About,
    meta: { title: 'hello', isAuth: true }
  }
]
```
