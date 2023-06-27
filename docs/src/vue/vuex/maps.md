# 四个 mapXxx 方法

## mapState

- 将 `state` 状态映射为计算属性
- 对象写法：键为自取的计算属性名，值为对应的状态（必须为字符串）
- 数组写法：当键值同名，可直接写状态名（字符串）
- 函数返回一个对象：`{sum: f, price: f}`
- 注意对象的 `...{}` 展开写法

```js
import { mapState } from 'vuex'

computed: {
  // 手动写法
  sum() {
    return this.$store.state.sum
  },
  price() {
    return this.$store.state.price
  },

  // 对象写法
  ...mapState({sum: 'sum', price: 'price'}),

  // 数组写法
  ...mapState(['sum', 'price'])
}
```

## mapGetters

- 将 getters 的数据映射为计算属性

```js
import { mapGetters } from 'vuex'

computed: {
  bigSum() {
    return this.$store.getters.bigSum
  },
  double() {
    return this.$store.getters.double
  },

  // 对象写法
  ...mapGetters({bigSum: 'bigSum', double: 'double'}),

  // 数组写法
  ...mapGetters(['bigSum', 'double']),
}
```

## mapActions

- 生成与 `actions` 对话的函数，即包含 `$store.dispatch()`
- `mapActions` 生成的函数不会传入参数，需要在调用时手动传入数据，不传参默认传入 `$event`
- 数组写法要注意函数名和 `actions` 动作类型同名，调用时勿写错

```js
import { mapActions } from 'vuex'

methods: {
  // 手动写法
  incrementOdd() {
    this.$store.dispatch('addOdd', this.number)
  },
  incrementAsync() {
    this.$store.dispatch('addAsync', this.number)
  },

  // 对象写法
  ...mapActions({incrementOdd: 'addOdd', incrementAsync: 'addAsync'}),

  // 数组写法
  ...mapActions(['addOdd', 'addAsync']),
}
```

```html
<button @click="incrementOdd(number)">奇数+1</button>
```

## mapMutations

- 生成与 `mutations` 对话的函数，即包含 `$store.commit()`
- 同样注意传递参数，以及数组形式函数名的问题

```js
import { mapMutations } from 'vuex'

methods: {
  increment() {
    this.$store.commit('ADD', this.number)
  },
  decrement() {
    this.$store.commit('SUB', this.number)
  },

  // 对象写法
  ...mapMutations({increment: 'ADD', decrement: 'SUB'}),

  // 数组写法
  ...mapMutations(['ADD', 'SUB']),
}
```
