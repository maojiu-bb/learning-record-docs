# Hello Vue3 <img src="/image/onepiece.png" style="width:30px;display:inline-block;position:relative;top:2px" />

:::tip
[Vue3 官方文档](https://cn.vuejs.org/)
:::

## Vue3 的变化

### 性能的提升

- 打包大小减少 41%
- 初次渲染快 55%, 更新渲染快 133%
- 内存减少 54%

### 源码的升级

- 使用 Proxy 代替 defineProperty 实现响应式
- 重写虚拟 DOM 的实现和 Tree-Shaking

### 拥抱 TypeScript

- Vue3 可以更好的支持 TypeScript

### 新的特性

1.Composition API（组合 API）

- setup 配置
- ref 与 reactive
- watch 与 watchEffect
- provide 与 inject
- ......

  2.新的内置组件

- Fragment
- Teleport
- Suspense

  3.其他改变

- 新的生命周期钩子
- data 选项应始终被声明为一个函数
- 移除 keyCode 支持作为 v-on 的修饰符
- ......
