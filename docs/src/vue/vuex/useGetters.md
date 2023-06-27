# getters 的使用

- 当 `state` 中的数据需要经过加工后再使用时，可以使用 `getters` 加工
- 它不是必须的，当加工逻辑复杂且需要复用时，可以考虑使用
- `state` 与 `getters` 的关系有点像 `data` 和 `computed` 的关系
- 组件读取：`$store.getters.bigSum`

```js
...
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
```
