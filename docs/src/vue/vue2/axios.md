# vue 2.x 全局配置 axios

实际项目开发中，几乎每个组件中都会使用 `axios` 发起数据请求。此时会遇到如下两个问题：

- 每个组件中都需要导入 `axios`（代码臃肿）
- 每次发请求都需要填写完整的请求路径（不利于后期的维护）
  在 `main.js` 文件中进行配置：

```js
// 配置请求根路径
axios.defaults.baseURL = 'http://api.com'

// 把 axios 挂载到 Vue 原型上
Vue.prototype.$http = aixos
```

优点：每个组件可以通过 `this.$http.get` 直接发起请求，无需再导入 `axios` ；若根路径发生改变，只需修改 `axios.defaults.baseURL` ，有利于代码维护。

缺点：无法实现 `API` 的复用。即多个组件需要对同一个接口发起请求，那么每个组件都需要重复书写 `this.$http.get('/users')` 类似的代码，造成冗余。（视频上的说法，个人认为真正的缺点是如果存在多个根路径，这种方式无法解决，所以才会有下面的改进方式。）

改进：对于每一个根路径，独立封装一个 `request.js` 模块，组件导入所需根路径对应的 `axios` 进行使用。

```js
import axios from 'axios'

// 创建 axios 实例
const request = axios.create({
  baseURL: 'http://api.taobao.com'
})

export default request
```
