# Redux 快速体验

## 1. Redux 数据流架构

> Redux 的难点是理解它对于数据修改的规则, 下图动态展示了在整个数据的修改中，数据的流向

![redux](/image/redux2.png)

为了职责清晰，Redux 代码被分为三个核心的概念，我们学 redux，其实就是学这三个核心概念之间的配合，三个概念分别是:

1. state: 一个对象 存放着我们管理的数据
2. action: 一个对象 用来描述你想怎么改数据
3. reducer: 一个函数 根据 action 的描述更新 state

## 2. 纯 Redux 实现计数器

> 核心步骤
>
> 1. 创建 reducer 函数 在内部定义好 action 和 state 的定义关系
> 2. 调用 Redux 的 createStore 方法传入定义好的 reducer 函数生成 store 实例
> 3. 通过 store 实例身上的 subscribe 方法监控数据是否变化
> 4. 点击按钮 通过专门的 dispatch 函数 提交 action 对象 实现数据更新

```html
<button id="decrement">-</button>
<span id="count">0</span>
<button id="increment">+</button>

<script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>

<script>
  // 定义reducer函数
  // 内部主要的工作是根据不同的action 返回不同的state
  function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 }
      case 'DECREMENT':
        return { count: state.count - 1 }
      default:
        return state
    }
  }
  // 使用reducer函数生成store实例
  const store = Redux.createStore(counterReducer)

  // 订阅数据变化
  store.subscribe(() => {
    console.log(store.getState())
    document.getElementById('count').innerText = store.getState().count
  })
  // 增
  const inBtn = document.getElementById('increment')
  inBtn.addEventListener('click', () => {
    store.dispatch({
      type: 'INCREMENT'
    })
  })
  // 减
  const dBtn = document.getElementById('decrement')
  dBtn.addEventListener('click', () => {
    store.dispatch({
      type: 'DECREMENT'
    })
  })
</script>
```
