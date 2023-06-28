# 路由守卫

:::tip
路由守卫

作用：对路由进行权限控制。

分类：全局守卫、独享守卫、组件内守卫
:::

## 全局守卫

- 全局前置守卫：`beforeEach()`
- 全局后置守卫：`afterEach()`
  守卫回调函数 3 个形参：

- `to` ：将要访问的路由的信息对象，即 `$route`
- `from` ：将要离开的路由的信息对象
- `next` ：放行函数（后置守卫没有）
  next 函数 3 种调用方式：

- 直接放行：`next()`
- 强制跳转到其他路由：`next(/login)`
- 阻止本次跳转：`next(false)`

```js
const router = new VueRouter({...})

router.beforeEach((to, from, next) => {
  if(to.path === '/main') {
    const token = localStorage.getItem('token')

    if(token) {
      next()
    } else {
      next('/login')
    }
  } else {
      next()
  }
})

router.afterEach((to,from) => {
  if(to.meta.title) {
    // 修改网页标题
    document.title = to.meta.title
  } else {
    document.title = 'vue_test'
  }
})
```

## 独享路由守卫

- 某一条路由规则独享的守卫
- 独享守卫只一个

```js
{
  path: 'about',
  component: About,
  beforeEnter(to, from ,next) {
    ...
  }
}
```

## 组件内路由守卫

```js
export default {
  name: 'About',

  // 进入守卫：通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    ...
  }

  // 离开守卫：通过路由规则，离开该组件时被调用
  beforeRouteLeave (to, from, next) {
    ...
  }
}
```

## 各个守卫执行顺序

从 `About` 组件通过路由规则进入 `Home` 组件：

```bash
About-beforeRouteLeave
beforeEach
Home-beforeEnter
Home-beforeRouteEnter
afterEach
Home组件生命周期开始
```
