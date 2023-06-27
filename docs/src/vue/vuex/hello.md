# Hello Vuex

:::tip
[Vuex 官方文档](https://vuex.vuejs.org/zh/)
:::

## 概述

何为 Vuex ？

Vuex 专门在 Vue 中实现集中式状态（数据）管理的一个 Vue 插件，对 Vue 应用中多个组件的共享状态进行集中式的管理，也是一种组件间通信的方式，适用于任意组件间通信

何时用 Vuex ？

- 多个组件依赖于同一状态
- 来自不同组件的行为需要变更同一状态
  Vuex 工作原理图：
  ![Vuex](/image/Vuex.png)

官方 Vuex 项目结构示例：

```shell
.
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```
