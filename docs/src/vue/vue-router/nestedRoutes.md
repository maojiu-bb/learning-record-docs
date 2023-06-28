# 嵌套路由

`About` 组件中声明子路由链接和子路由占位符：

```html
<template>
  <div class="about-container">
    <!-- 要把父路由寫上 -->
    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>

    <router-view></router-view>
  </div>
</template>
```

通过 `children` 属性声明子路由规则：

```js
const routes = [
  {
    path: '/about',
    component: 'About',
    children: [
      // 注意不要写成 /tab1
      { path: 'tab1', component: Tab1 },
      { path: 'tab2', component: Tab2 }
    ]
  }
]
```
