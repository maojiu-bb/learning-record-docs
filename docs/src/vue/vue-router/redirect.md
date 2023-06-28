# 路由重定向

使用 `redirect` 来进行路由重定向

```js
const routes = [
  // 访问 / 跳转到 /home
  { path: '/', redirect: '/home' },
  { path: '/home', component: 'Home' },
  { path: '/about', component: 'About' },
  { path: '/movie', component: 'Movie' }
]

const router = new VueRouter({
  routes
})

export default router
```
