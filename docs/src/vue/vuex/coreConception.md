# Vuex 核心概念

## state

- Vuex 管理的状态对象
- 唯一的

## actions

- 值为一个对象，包含多个响应用户动作的回调函数
- 通过 commit()触发 mutation 中函数的调用，间接更新 state
- 可包含异步代码

## mutations

- 值为一个对象，包含多个直接更新 state 的方法
- 不能写异步代码，只能单纯地操作 state

## getters

- 值为一个对象，包含多个用于返回数据的函数
- 类似于计算属性，getters 返回的数据依赖于 state 的数据

## modules

- 一个 module 是一个 store 的配置对象，与一个组件对应
