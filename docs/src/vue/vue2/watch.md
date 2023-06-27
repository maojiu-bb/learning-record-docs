# watch 侦听器

`watch` 侦听器允许开发者监视数据的变化，针对数据的变化做特定的操作。
:::tip
watch vs computed

侦听器可以监听普通属性和计算属性

computed 能完成的功能，watch 也能

watch 能完成的功能，computed 不一定，如异步操作
:::

- Vue 管理的函数写成普通函数，使其 `this` 指向 `vue` 实例对象
- 不被 Vue 管理的函数写成箭头函数（定时器回调、`ajax` 回调、`Promise` 回调），这样其 `this` 才是 vue 实例对象

```js
// watch 简写形式
export default {
  data() {
    return {
      username: ''
    }
  },
  watch: {
    username(newVal, oldVal) {
      console.log('新值: ', newVal)
      console.log('旧值: ', oldVal)
    }
  }
}
```

默认情况下，组件在初次加载完毕后不会调用 `watch` 侦听器。如果想让 `watch` 侦听器立即被调用，需要使用 `immediate` 选项：

```js
watch: {
  // 对象形式的侦听器
  username: {
    // handler 属性是固定写法
    handler(newVal, oldVal) {
      ...
    },
    immediate: true
  }
}
```

当 `watch` 侦听的是一个对象，如果对象中的属性值发生了变化，则无法被监听到。此时需要使用 `deep` 选项进行**深度监听**：

```js
export default {
  data() {
    return {
      info: { username: 'admin' }
    }
  },
  watch: {
    info: {
      handler(newVal) {
        console.log(newVal)
      },
      deep: true
    }
  }
}
```

若只想监听对象里单个属性的变化，代码如下：

```js
export default {
  data() {
    return {
      info: { username: 'admin' }
    }
  },
  watch: {
    // 记得加引号
    'info.username': {
      handler(newVal) {
        console.log(newVal)
      }
    }
  }
}
```

通过 Vue 实例的 `$watch` 监听：

```js
const vm = new Vue({...})

vm.$watch('isHot',{
  immediate: true,
  deep: true,
  handler(newValue,oldValue) {
    console.log(newValue, oldValue)
  }
})

vm.$watch('isHot',function(newValue,oldValue) {
  console.log(newValue, oldValue)
})
```
