# vue-router 初体验

安装 `vue-router`：

```sh
npm install vue-router@3.5.2 -S
```

创建路由模块，在 `src` 源代码目录下，新建 `router/index.js` 路由模块，初始化代码：

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/component/Home.vue'
import About from '@/component/About.vue'
import Movie from '@/component/Movie.vue'

// 把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 路由匹配规则
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/movie', component: Movie }
]

// 创建路由实例对象
const router = new VueRouter({
  routes
})

export default router
```

在 `main.js` 文件中导入并挂载路由模块：

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
```

在组件中声明路由链接和占位符：

```html
<template>
  <div class="app-container">
    <!-- 路由链接 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/movie">电影</router-link>

    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>
```

注意事项：

- 组件分为路由组件和一般组件，前者放在 `pages(或views`) 文件夹，后者放在 `components` 文件夹
- 每个组件都有 `$route` 属性，存储着组件的路由规则信息
- `$router` 是路由器对象，整个 SPA 只有一个
