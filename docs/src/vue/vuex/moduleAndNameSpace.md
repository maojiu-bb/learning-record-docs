# Vuex 模块化&命名空间

让代码更好维护，让多种数据分类更加明确，每一类数据及其相关操作对应一个 `store` 。

```js
// src/store/index.js
const countAbout = {
  // 开启命名空间
  namespaced: true,
  state: {
    sum: 0
  },
  actions: {...},
  mutations: {...},
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}
const personAbout = {
  // 开启命名空间
  namespaced: true,
  state: {
    personList: []
  },
  actions: {...},
  mutations: {...},
  getters: {...}
}

export default new Vuex.Store({
  modules: {
    countAbout,
    personAbout
  }
})
```

开启命名空间后，组件中读取 `state` 数据：

```js
// 直接读取
this.$store.state.personAbout.personList

// mapState 读取
...mapState('countAbout',['sum','school']),
```

开启命名空间后，组件中读取 `getters` 数据：

```js
// 直接读取
this.$store.getters['countAbout/bigSum']

// mapGetters 读取：
...mapGetters('countAbout',['bigSum'])
```

开启命名空间后，组件中调用 `dispatch`

```js
// 直接 dispatch
this.$store.dispatch('countAbout/addODdd', this.number)
// 借助 mapActions
...mapActions('countAbout', {incrementOdd:'addOdd', incrementWait:'addAsync'})
```

开启命名空间后，组件中调用 `commit`

```js
// 直接 commit
this.$store.commit('personAbout/ADD_PERSON', person)
// 借助 mapMutations
...mapMutations('countAbout',{increment:'ADD',decrement:'SUB'}),
```
