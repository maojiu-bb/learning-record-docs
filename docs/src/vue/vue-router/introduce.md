# 路由

## 何为路由

- 一组路由即一组映射关系（key-value）
- key 为路径，value 可能是 function 或 component

## 前端路由

前端路由即地址和组件之间的对应关系（以下已哈希模式为例）。

前端路由简易工作方式：

1.用户点击了页面上的路由链接
2.URL 地址的 Hash 值发生变化 3.前端路由监听到 Hash 值的变化 4.前端路由渲染 Hash 地址对应的组件
实现简易的前端路由：

```html
<!-- a 链接添加对应 Hash 值 -->
<a href="#/home">Home</a>
<a href="#/movie">Movie</a>
<a href="#/about">About</a>

<!-- 动态渲染组件 -->
<component :is="compName"></component>
```

```js
export default {
  name: 'App',
  data() {
    return {
      compName: 'Home'
    }
  },
  created() {
    // 监听 Hash 地址改变，切换组件
    window.onhashchange = () => {
      switch(location.hash) {
        case: '#/home':
          this.compName = 'Home'
          break
        case: '#/movie':
          this.compName = 'Movie'
          break
        case: '#/about':
          this.compName = 'About'
          break
      }
    }
  }
}
```

## 后端路由

- 后端路由是指请求方式、请求地址与 function 处理函数之间的对应关系
- 服务器收到一个请求，根据请求方式、路径匹配对应的函数处理请求，返回响应数据

```js
const express = require('express')
const router = express.Router()

router.get('/userlist', function(req, res) {...})

module.exports = router
```
