# Vue 监测数据的原理

:::tip
监测数据

监测数据，即 Vue 是如何监听数据发生变化，从而重新解析模板渲染页面的。Vue 会监测 data 中所有层级的数据。
:::

## Vue 监测对象数据

- 原理：通过 Object.defineProperty() 为属性添加 getter、setter ，对属性的读取、修改进行拦截，即数据劫持
- 存在问题：
  - 对象新增加的属性，默认不做响应式处理
  - 对象删除属性，也不是响应式的
- 解决办法，使用如下 [API](https://v2.cn.vuejs.org/v2/api/#Vue-set) ：
  - Vue.set(target, propertyName/index, value)
  - vm.$set(target, propertyName/index, value)
  - Vue.delete(target, propertyName/index)
  - vm.$delete(target, propertyName/index)
- Vue.set() 和 vm.$set() 不能给 vm 或 vm 的根数据对象添加属性（即 data）

```js
// 简单模拟实现对象的数据监测，Vue 更完善
// Vue 通过 vm.name 即可修改
// Vue 实现深层监听
let person = {
  name: 'Vue',
  age: 99
}

function Observer(obj) {
  const keys = Object.keys(obj)

  keys.forEach(key => {
    Object.defineProperty(this, key, {
      get() {
        return obj[key]
      }
      set(value) {
        console.log('数据被修改，重新解析模板...')
        obj[key] = value
      }
    })
  })
}

let vm = {}
let observer = new Observer(person)
vm._data = observer
```

## Vue 监测数组

- 原理：通过重写数组的 API 实现拦截：push()、pop()、shift()、unshift()、splice()、sort()、reverse()
- 7 个 API 之所以是响应式的，是因为 Vue 对这些方法进行了[包裹](https://v2.cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B)，即二次封装。做了两件事：调用对应的原生方法更新数组 & 重新解析模板更新页面
- 存在问题：
  - 直接通过数组下标修改是[非响应式的](https://v2.cn.vuejs.org/v2/guide/reactivity.html#%E5%AF%B9%E4%BA%8E%E6%95%B0%E7%BB%84)
- 解决办法：
  - 使用 7 个 API 修改数组
  - Vue.set()、vm.$set()
  - Vue.delete()、vm.$delete()
