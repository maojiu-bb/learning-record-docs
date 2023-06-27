# $nextTick

- 语法：`this.$nextTick(回调函数)`
- 作用：在下一次 DOM 更新结束后执行其指定的回调
- 什么时候用：当改变数据后，要基于更新后的 DOM 进行操作时，要在 `nextTick` 指定的回调函数中执行
- 组件的 `$nextTick(cb)` 方法，会把 cb 回调推迟到下一个 DOM 更新周期之后执行，即在 DOM 更新完成后再执行回调，从而保证 cb 回调可以获取最新的 DOM 元素

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
