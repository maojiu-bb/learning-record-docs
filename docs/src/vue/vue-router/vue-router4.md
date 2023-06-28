# vue-router 4.x

目前 `vue-router` 有 `3.x` 和 `4.x` 两个版本，前者只能在 `vue2.x` 中使用，后者只能在 `vue3.x` 中使用。

:::tip
详细信息请参考[vue-router 4.0x 官方文档](https://router.vuejs.org/zh/guide/)
:::

## `vue-router 4.x` 初体验：

安装 `vue-router 4.x` ：

```sh
npm install vue-router@next -S
```

创建路由模块：

```js
// 从 vue-router 按需导入两个方法
// createRouter：创建路由实例对象
// createWebHashHistory：指定路由工作模式为 hash 模式
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/home', component: Home }]
})

export default router
```

`main.js` 导入并挂载路由模块：

```js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
```

## useRouter

在`vue-router 4.0x`中，如果要进行编程式导航，则需要使用`useRouter`这个`hook`函数。

```html
<template>
  <div>
    <button @click="handleClick">按钮</button>
  </div>
</template>
```

```js
// 使用 useRouter hook函数
import { useRouter } from 'vue-router'

const router = useRouter()
// 进行编程式导航
router.push('/about')
```

使用这个 hook 函数时，一样有类似于以前的导航 API:

- router.push('/about')
- router.replace('/about')
- router.go(数值)
- router.forward()
- router.back()

## useRoute

在`vue-router 4.0x`中，如果要获取路由相关的信息，则需要使用`useRoute`这个`hook`函数。

```js
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.meta)
console.log(route.params)
console.log(route.query)
// ......
```
