# 组件上的 v-model

当需要维护组件内外数据的同步时，可以在组件上使用 `v-model` 指令。

父组件传值：

```html
<!-- 父组件传值 -->
<my-counter v-model:number="count"></my-counter>
```

子组件在 `emits` 节点声明自定义事件，格式为 `update:xxx `，调用 `$emit` 触发自定义事件：

```js
export default {
  props: ['number'],
  emits: ['update:number'],
  methods: {
    add() {
      this.$emit('update:number', this.number++)
    }
  }
}
```

注意，在 `vue3` 中 `props` 属性同样是只读的，上面 `this.number++` 并没有修改 `number` 的值。

其实通过 `v-bind` 传值和监听自定义事件的方式能实现和 `v-model` 相同的效果
