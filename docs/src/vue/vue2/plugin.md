# 插件

- 用于增强 Vue
- 本质是包含 `install` `方法的一对象，install` 第一个参数是 Vue 构造函数，第二个以后的参数是插件使用者传递的数据
  定义插件：

```js
// plugins.js
export default {
  install(Vue, ...rest) {
    console.log(rest)

    Vue.filter(...)
    Vue.directive(...)
    Vue.mixin(...)

    Vue.prototype.myProperty = 'plugins'
    Vue.prototype.myMethod = function() {}
  }
}
```

使用插件：

```js
// main.js
import plugins from './plugins.js'

Vue.use(plugins, 1, 2)
```
