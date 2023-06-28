# 常用 Composition API

## setup

- setup 是 Vue3 中一个新的配置项，值为函数
- 组件中使用的数据、方法等都要配置在 setup 中
- setup 函数两种返回值：
  - 返回一个对象，对象中的属性、方法可在模板中直接使用
  - 返回一个渲染函数，可自定义渲染内容
- setup 函数的参数：
  - props：值为对象，包含了组件外部传进来，且组件内部声明接收的属性
  - context：上下文对象
  - attrs：值为对象，包含了组件外部传进来，且组件内部没有声明接收的属性，相当于 `this.$attrs`
  - slots：收到的插槽内容，相当于 `this.$slots`
  - emit：触发自定义事件的函数，相当于 `this.$emit`

```js
// 没错，渲染函数就叫 h
import { h } from 'vue'

export default {
  name: 'App',
  props: ['title'],
  // Vue3 需要声明自定义事件，虽然不声明也能运行
  emits: ['changeCount'],

  // 返回函数
  /*
  setup() {
    return () => h('h1', 'Hello')
  },
  */

  // 返回对象
  setup(props, context) {
    let name = 'Vue3'
    function sayHello() {}
    function test() {
      context.emit('changeCount', 888)
    }

    return {
      name,
      sayHello,
      test
    }
  }
}
```

注意：

- setup 在 `beforeCreate` 钩子之前执行，`this` 为 `undefined`
- setup 不要和 Vue2 配置混用。Vue2 的配置可以访问到 setup 的属性方法，反过来不行；如有重名，setup 优先
- setup 不能是 async 函数，因为 async 函数返回的是 promise 不是对象，会导致模板无法访问属性方法
- 若要返回 promise 实例，需要 `Suspense` 和异步组件的配合

## ref 函数

作用：定义响应式数据

语法：`const name = ref(initValue)`

- `ref` 函数返回一个 `RefImpl(reference implement)` 实例对象，全称引用实现的实例对象
- 它包含响应式数据，简称引用对象、reference 对象、ref 对象
- JS 访问数据：`name.value`
- 模板访问数据：`<div></div>`
  注意事项：

- `ref` 函数可以接收基本数据类型和引用数据类型
- 基本类型数据的响应式还是靠 `Object.defineProperty(`) 完成
- 对象类型数据使用 ES6 的 `Proxy` 实现响应式，Vue3 把相关操作封装在 `reactive` 函数中
- 按照之前的办法，对于对象数据，应该遍历每一层的属性添加 `getter` 、`setter`，但 Vue3 使用 `Proxy` 把内部数据一口气监测了

```html
<h2>{{ name }}</h2>
<p>{{ jobInfo.type }}</p>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    let name = ref('Vue3')
    let jobInfo = ref({
      type: 'frontend',
      salary: '40w'
    })

    function changeInfo() {
      name.value = '鱿鱼丝'
      // jobInfo 是 RefImpl 实例
      // jobInfo.value 是 Proxy 实例对象
      jobInfo.value.salary = '50w'
    }

    return {
      name,
      jobInfo,
      changeInfo
    }
  }
}
```

## reactive 函数

- 定义引用类型的响应式数据，不可用于基本数据类型
- `const 代理对象 = reactive(源对象)` 接收对象或数组，返回代理对象（Proxy 的实例对象）
- `reactive` 的响应式是深度的
- 基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据

```js
import { reactive } from 'vue'

export default {
  setup() {
    let person = reactive({
      name: 'Vue3',
      sex: 'unknown',
      info: {
        school: 'Oxford',
        major: 'computer'
      }
    })

    let color = reactive(['red', 'green', 'blue'])

    function changeInfo() {
      person.info.major = 'art'
      color[0] = 'yellow'
    }

    return {
      person,
      color,
      changeInfo
    }
  }
}
```

## ref VS reactive

定义数据：

- ref 用于定义基本类型数据
- reactive 用于定义对象或数组类型数据
- ref 也可定义对象或数组类型数据，内部通过 reactive 转为代理对象
- 一般使用 reactive 函数，可以把所有数据封装为一个对象
  原理：

- ref 通过 `Object.defineProperty()` 实现响应式
- reactive 通过 Proxy 实现响应式，Reflect 操作源对象数据
  使用角度：

- ref 定义数据，访问数据需要 `.value`，模板中不需要
- reactive 定义的数据，都不需要

## Vue3 响应式原理

- 通过 [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 代理，拦截对对象属性的操作，包括增删改查
- 通过 [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect) 反射，对源对象的属性进行操作

```js
let originPerson = {
  name: 'Lily',
  age: 22
}

let person = new Proxy(originPerson, {
  // 拦截增加和查询操作
  get(target, prop) {
    // 读取源对象的属性
    return Reflect.get(originPerson, prop)
  },
  // 拦截修改操作
  set(target, prop, value) {
    // 修改源对象的属性
    return Reflect.set(target, prop, value)
  },
  // 拦截删除操作
  deleteProperty(target, prop) {
    // 删除源对象的属性
    return Reflect.deleteProperty(target, prop)
  }
})

console.log(person.name)
person.age = 33
person.sex = 'unknown'
delete person.age
```

## computed 函数

```js
import { reactive, computed } from 'vue'

export default {
  setup() {
    let person = reactive({
      firstName: 'Cai',
      lastName: 'QP'
    })

    // 计算属性简写形式
    person.fullName = computed(() => {
      return person.firstName + '-' + person.lastName
    })

    // 计算属性完整形式
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const arr = value.split('-')
        person.firstName = arr[0]
        person.lastName = arr[1]
      }
    })

    return {
      person
    }
  }
}
```

## watch 函数

:::tip
Vue3 watch 能侦听的东西

监视源只能是 getter/effect 函数、ref、响应式对象或这些类型的数组
:::

```js
import { ref, reactive, watch } from 'vue'
...

// 数据
let sum = ref(0)
let msg = ref('hello')
let person = reactive({
  name: 'Vue3',
  age: 18,
  info: {
    job: {
      salary: 40,
    },
  },
})
```

### 侦听 ref 定义的响应式数据：

- 注意不要写成 `sum.value`

```js
// 参数：侦听的数据，回调，其他配置
watch(
  sum,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  },
  { immediate: true }
)
```

### 侦听多个 ref 定义的响应式数据：

```js
// newVal，oldVal 也是数组
watch([sum, msg], (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
```

### 侦听 ref 定义的对象类型数据：

```js
// 用 ref 定义对象类型数据
let person = ref({
  name: 'Vue3',
  age: 18,
  info: {
    job: {
      salary: 40,
    },
  },
})

// 开启深度监听才有效，此时监听的是 RefImpl 实例
// Ref 实例的 value 是 Proxy 对象，存的是地址
// 因此无法监听 person 内部属性的变化
watch(person, (newVal, oldVal) => { ... }, { deep:true })

// 这个和 “侦听 reactive 函数直接返回的那一整坨响应式数据” 效果一致
watch(person.value, (newVal, oldVal) => {...})
```

### 侦听 reactive 函数直接返回的那一整坨响应式数据：

- oldVal 是错误的！和 newVal 的值一样
- 强制开启了深度侦听，`deep` 配置不生效！

```js
watch(
  person,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  },
  { immediate: true, deep: false }
)
```

### 侦听 reactive 定义的响应式数据某个属性：

- 如果是 `() => person.info` oldVal 也是错误的！
- `() => person.name` oldVal 是正确的，何时对何时错自己琢磨吧！
- 此处没有强制开启深度监听

```js
// 如果监视的属性还是对象，则需要开启深度监听
watch(
  () => person.info,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  },
  { deep: true }
)
```

### 侦听 reactive 定义的响应式数据多个属性：

```js
watch(
  [() => person.name, () => person.info],
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  },
  { deep: true }
)
```

## watchEffect 函数

- watchEffect 不需要指明监听哪个属性，回调里用到哪个属性，就自动监听哪个属性
- computed 注重计算的值，即回调函数的返回值，因此必须有返回值
- watchEffect 更注重过程，即回调函数的函数体，因此可没有返回值
- watchEffect 没有开启深度监听，也不能开启深度监听！
- watchEffect 内部自行修改数据，不会重新调用回调，因此不会出现递归调用

```js
// 回调中用到的数据只要发生变化，则直接重新执行回调
watchEffect(() => {
  let total = sum.value
  let p = person
  console.log('watchEffect...')
})
```

## 生命周期

注意和 `vue2.x` 的生命周期图作对比，`beforeDestroy` 和 `destroyed` 变为 `beforeUnmount` 和 `unmounted` 。
![vue3 生命周期](/image/lifecycle.svg)
Vue3 也提供了 Composition API 形式的生命周期钩子，与 Vue2 中钩子对应关系如下：

- beforeCreate===>setup()
- created=======>setup()
- beforeMount ===>onBeforeMount
- mounted=======>onMounted
- beforeUpdate===>onBeforeUpdate
- updated =======>onUpdated
- beforeUnmount ==>onBeforeUnmount
- unmounted =====>onUnmounted
  若和配置项生命钩子一起使用，则组合式会比配置项的先执行，如 `onBeforeMount` 先于 `beforeMount`

```js
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

setup(){
  console.log('---setup---')
  let sum = ref(0)

  //通过组合式API的形式去使用生命周期钩子
  onBeforeMount(()=>{
    console.log('---onBeforeMount---')
  })
  onMounted(()=>{
    console.log('---onMounted---')
  })
  onBeforeUpdate(()=>{
    console.log('---onBeforeUpdate---')
  })
  onUpdated(()=>{
    console.log('---onUpdated---')
  })
  onBeforeUnmount(()=>{
    console.log('---onBeforeUnmount---')
  })
  onUnmounted(()=>{
    console.log('---onUnmounted---')
  })

  return {sum}
},
```

## hook 函数

- hook 是一个函数，把 setup 函数的 Composition API 进行了封装
- 类似 Vue2 的 Mixin，能复用代码，让 setup 里的逻辑更清晰
- hook 放在 hooks 文件夹中，一个文件对应一个功能模块，以 `useXxx` 命名

```js
// hooks/usePoint.js

import { reactive, onMounted, onBeforeUnmount } from 'vue'

export default function () {
  //实现鼠标“打点”相关的数据
  let point = reactive({
    x: 0,
    y: 0
  })

  //实现鼠标“打点”相关的方法
  function savePoint(event) {
    point.x = event.pageX
    point.y = event.pageY
  }

  //实现鼠标“打点”相关的生命周期钩子
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}
```

```js
// 使用 hook
import usePoint from '../hooks/usePoint.js'

export default {
  setup() {
    let point = usePoint()

    return { point }
  }
}
```

## toRef 函数

- 创建一个 `RefImpl` 实例对象，其 `value` 值指向另一个对象的某个属性，修改 `value` 值会修改源对象对应的属性
- 应用：需要把响应式对象的某个属性单独提供给外部使用
- 批量创建：`toRefs`

```js
import {reactive, toRef, toRefs} from 'vue'
...

setup() {
  let person = reactive({
    name: 'Vue3',
    age: 18,
    info: {
      job: {
        salary: 40,
      },
    },
  })

  return {
    // 注意不能写成 ref(person.name)，这和源对象是割裂开的
    name: toRef(person, 'name'),
    salary: toRef(person.info.job, 'salary')
    // or
    ...toRefs(person)
  }
}
```
