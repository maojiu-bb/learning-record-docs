# Option Store

与 Vue 的选项式 API 类似，我们也可以传入一个带有 state、actions 与 getters 属性的 Option 对象。

```js
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
```

这里的 `counter` 为一个唯一的名字。

Pinia 的 option store 与 Vuex 类似，就不一 一细说了，只是少了 `mutation` 环节。

你可以认为 `state` 是 store 的数据 `(data)`，`getters ` 是 store 的计算属性 `(computed)`，而 `actions` 则是方法 `(methods)`。
