# 组件通信

## 自定义属性 props

> 父传子、子传父

`props` 验证：

- 基础类型检查：`String`, `Number`, `Boolean`, `Array`, `Object`, `Date`, `Function`, `Symbol`
- 多个可能的类型
- 必填项检查
- [默认值](https://www.cnblogs.com/mmzuo-798/p/15188014.html)
- 自定义验证函数 `validator`
- `props` 是只读的，若是对象，对象内部的修改不报错，但不推荐。若需修改，则把 `props` 内容拷贝一份到 `data` 进行修改

### 父传子：

```html
<!-- 父组件 -->
<!-- 若 props 属性使用驼峰命名法，可使用驼峰形式或短横线分隔形式 -->
<Son :num="count" :msg="message" :pub-time="time"></Son>
```

```html
<!-- 子组件 -->
<p>父组件传过来的值：{{ num }}</p>
<p>父组件传过来的值：{{ msg }}</p>
```

```js
// 数组形式
props: ['num', 'msg', 'pubTime']

// 仅限制类型
props: {
  num: Number,
  msg: String
}

// 对象形式
props: {
  num: {
    type: Number,
    default: 0
  },
  msg: {
    type: [String, Number],
    required: true,
    validator(value) {
      return value === 'hello' || value === 1
    },
    default: 1
  }
}
```

### 子传父：

- 父组件通过 `props` 给子组件传递函数，子组件调用该函数即可修改父组件的数据
- 组件 `methods` 里函数的 `this` 始终指向该组件实例，可理解为 Vue 底层对这些函数做了 `bind` 处理
- 通过 `bind` 修改 `this` 指向后的新函数，其 `this` 指向不能再次修改。[官网说明](https://v2.cn.vuejs.org/v2/api/#methods)
- [思否文章](https://segmentfault.com/q/1010000015951625)
- 不推荐该方式进行子传父，推荐使用自定义事件

```html
<Son :addCount="addCount"></Son>
```

```js
export default {
  data() {
    return {
      count: 1
    }
  },
  methods: {
    addCount() {
      this.count++
    }
  }
}
```

```js
export default {
  props: ['addCount'],
  methods: {
    add() {
      this.addCount()
    }
  }
}
```

## 自定义事件

> 自定义事件可用于实现子传父

子组件触发自定义事件，并传递数据：

```js
// 子组件
data() {
  return {
    count: 1
  }
},
methods: {
  add() {
    this.count += 1
    this.$emit('count-change', this.count)
  }
}
```

父组件监听子组件的自定义事件，并调用回调函数处理数据：

- 父组件通过 `this.$refs.xxx.$on('事件名称',回调)` 监听子组件自定义事件时，回调函数要么配置在 `methods` 中，要么用箭头函数，否则 this 指向会出问题
- 组件上也可以绑定原生 DOM 事件，需要使用 `native` 修饰符
- 若想让自定义事件只触发一次，可以使用 `once` 修饰符，或`$once` 方法

```html
<!-- 方式一 -->
<Son @count-change="getNewCount"></Son>
<Son @count-change.once="getNewCount"></Son>

<!-- 方式二 -->
<Son ref="sonRef"></Son>

<!-- 监听子组件原生 DOM 事件 -->
<Son @click.native="handleClick"></Son>
```

```js
export default {
  data() {
    return {
      father: 1
    }
  },
  methods: {
    getNewCount(val) {
      this.father = val
    }
  },
  mounted() {
    // 方式二
    this.$refs.sonRef.$on('count-change', this.getNewCount)
    this.$refs.sonRef.$once('count-change', this.getNewCount)

    // 或
    this.$refs.sonRef.$on('count-change', (val) => (this.father = val))
  }
}
```

解绑自定义事件`this.$off()`：

```js
// 解绑单个自定义事件
this.$off('count-change')
// 解绑多个自定义事件
this.$off(['count-change', 'add'])
// 解绑所有自定义事件
this.$off()
```

## EventBus 全局事件总线

:::tip
思想

弄一个所有组件实例都能访问到的 Vue 实例对象，Vue 原型上包含事件处理的相关方法，包括 $on, $emit, $off, $once

:::

### 方式一

安装全局事件总线：

```js
// main.js
new Vue({
  ...
  beforeCreate() {
    Vue.prototype.$bus = this
  }
  ...
})
```

数据接收方为自定义事件绑定回调函数:

```js
export default {
  methods: {
    handleData() {...}
  },
  created() {
    this.$bus.$on('share', this.handleData)
  },
  beforeDestroy() {
    // 组件销毁，解绑事件
    this.$bus.$off('share')
  }
}
```

数据发送方触发自定义事件：

```js
export default {
  methods: {
    sendData() {
      this.$bus.$emit('share', 666)
    }
  }
}
```

### 方式二

创建 `eventBus.js/ts` 模块，并向外共享一个 Vue 的实例对象。

```js
// eventBus.js
import Vue from 'vue'

export default new Vue()
```

在数据发送方，调用 bus.$emit('事件名称', 要发送的数据) 方法触发自定义事件。

```js
// 数据发送方
import bus from './eventBus.js'

export default {
  data() {
    return {
      message: 'hello'
    }
  },
  methods: {
    sendData() {
      bus.$emit('share', this.message)
    }
  }
}
```

在数据接收方，通过 bus.$on('事件名称', 事件处理函数) 为自定义事件注册事件处理函数。

```js
// 数据接收方
import bus from './eventBus.js'

export default {
  data() {
    return {
      msg: ''
    }
  },
  // 细节1：在 created 钩子中注册函数
  created() {
    // 细节2：使用箭头函数，则 this 指向该组件而非 bus
    bus.$on('share', (val) => {
      this.msg = val
    })
  }
}
```

## 消息订阅与发布

:::tip

与全局事件总线很相似，因此一般用事件总线，不用这个
:::

安装第三方库 `PubSubJS` ：`npm install -S pubsub.js`

订阅消息：

```js
import pubsub from 'pubsub-js'

export default {
  methods: {
    handleData(messageName, data) {...}
  },
  created() {
    this.pubId = pubsub.subscribe('share', this.handleData)
    // or
    this.pubId = pubsub.subscribe('share', (messageName, data) => {
      console.log(data)
    })
  },
  beforeDestroy() {
    // 组件销毁，取消订阅
    pubsub.unsubscribe(this.pubId)
  }
}
```

发布消息：

```js
import pubsub from 'pubsub-js'

export default {
  methods: {
    sendData() {
      pubsub.publish('share', 666)
    }
  }
}
```

## ref / $refs

`ref` 用于给 DOM 元素或子组件注册引用信息。每个 vue 实例都有 `$refs` 对象，里面存储着 DOM 元素或子组件的引用。通过该方式可以获取到 DOM 元素或子组件实例。

> 可以父传子，也能子传父。子传父要和自定义事件搭配使用。

```html
<!-- 引用 DOM 元素 -->
<p ref="pp">这是段落</p>
<button @click="getRef">获取 DOM 元素</button>

<!-- 引用子组件 -->
<son ref="sonRef"></son>
<button @click="getComponent">获取子组件实例引用</button>
```

```js
methods: {
  getRef() {
    // 获取元素的引用
    console.log(this.$refs.pp)
    this.$refs.pp.style.color = 'red'
  },
  getComponent() {
    console.log(this.$refs.sonRef)
    // 可以访问子组件的数据和方法
    this.$refs.sonRef.count = 1
    this.$refs.sonRef.add()
  }
}
```

组件的 `$nextTick(cb)` 方法，会把 cb 回调推迟到下一个 DOM 更新周期之后执行，即在 DOM 更新完成后再执行回调，从而保证 cb 回调可以获取最新的 DOM 元素。

```js
methods: {
  showInput() {
    this.inputVisible = true
    // 对输入框的操作推迟到 DOM 更新完成之后
    this.$nextTick(() => {
      this.$refs.input.focus()
    })
  }
}
```
