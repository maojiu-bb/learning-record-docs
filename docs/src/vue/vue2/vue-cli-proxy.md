# Vue 脚手架配置代理

## 配置单个代理

在 `vue.config.js` 中添加如下配置：

```js
devServer: {
  proxy: 'http://localhost:5000'
}
```

- 优点：配置简单，请求资源时直接发给前端（8080）即可。
- 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
- 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）

## 配置多个代理

编写 `vue.config.js` 配置具体代理规则：

```js
module.exports = {
  devServer: {
    proxy: {
      '/api1': {
        // 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000', // 代理目标的基础路径
        changeOrigin: true,
        // 把路径的 /api1 替换为空串
        pathRewrite: { '^/api1': '' }
      },
      '/api2': {
        // 匹配所有以 '/api2'开头的请求路径
        target: 'http://localhost:5001',
        changeOrigin: true,
        pathRewrite: { '^/api2': '' }
      }
    }
  }
}
/*
changeOrigin 设置为 true 时，服务器收到的请求头中的 host：localhost:5000
changeOrigin 设置为 false 时，服务器收到的请求头中的 host：localhost:8080
changeOrigin 默认为 true
*/
```

- 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
- 缺点：配置略微繁琐，请求资源时必须加前缀
