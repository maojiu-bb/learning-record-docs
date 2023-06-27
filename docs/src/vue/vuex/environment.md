# 搭建 Vuex 环境

安装 Vuex：`npm install vuex@3 --save`

:::warning

注意：Vue2 安装 Vuex3，Vue3 安装 Vuex4，版本需对应。
:::
创建文件 `src/store/index.js` ：

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {}
const mutations = {}
const state = {}

export default new Vuex.Store({
  actions,
  mutations,
  state
})
```

`main.js` 配置 `store` ：

```js
import store from './store'

new Vue({
  el: '#app',
  store,
  render: (h) => h(App)
})
```
