# Vue3 项目结构

Vue3 中 `main.js` 代码有所改变：

```js
// 不再引入 Vue 构造函数，而是引入 createApp 工厂函数
// createApp函数：创建 vue 的 SPA 实例
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象
const app = createApp(App)
app.mount('#app')
```

Vue3 支持定义多个根节点，组件的 `<template>` 支持定义多个根节点：

```html
<template>
  <h1>根节点</h1>
  <h1>根节点</h1>
</template>
```
