# 基本使用

组件实例与 `Actions` 和 `Mutations` 对话：

- 若没有网络请求或其他业务逻辑，组件中也可以越过 `actions` ，即不写 `dispatch`，直接编写`commit`：

```js
methods: {
  increment() {
    this.$store.commit('ADD', this.number)
  },
  incrementOdd() {
    this.$store.dispatch('addOdd', this.number)
  },
  incrementAsync() {
    this.$store.dispatch('addAsync', this.number)
  }
}
```

定义 `Actions` 和 `Mutations`：

- `context` 是一个迷你版的 `store`，可访问 `dispatch`, `commit` 方法和 `state`
- `mutations` 的动作类型一般用大写，与 `actions` 区分

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
  // context 是一个迷你版的 store
  // 可访问 dispatch, commit 方法和 state
  addOdd(context, value) {
    if (context.state.sum % 2 !== 0) {
      context.commit('ADD', value)
    }
  },
  addAsync(context, value) {
    setTimeout(() => {
      context.commit('ADD', value)
    })
  }
}
const mutations = {
  // mutations 的动作类型一般用大写，与 actions 区分
  ADD(state, value) {
    state.sum += value
  }
}

const state = {
  sum: 0
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})
```

组件访问 Vuex 的数据：

```html
<p>{{ $store.state.sum }}</p>
```
