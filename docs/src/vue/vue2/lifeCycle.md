# vue 生命周期

vue 生命周期是指一个组件从创建、运行、销毁的整个过程。每个阶段对应着不同的生命周期钩子。

生命周期钩子也可理解为：Vue 在特定的时刻调用特定的函数。

除了图中 8 个钩子，还有 `nextTick`，`activated`，`deactivated`

关于销毁过程：

- 销毁后借助 Vue 开发者工具看不到任何信息。
- 销毁后自定义事件会失效，但原生 DOM 事件依然有效。
- 一般不在 beforeDestroy 操作数据，因为即便操作数据，也不会再触发更新流程

![生命周期](/image/lifecycle1.png)
![生命周期](/image/lifecycle2.png)
