# 条件渲染指令

## 基础用法

```html
<p v-if="status === 200">success</p>
<p v-else-if="status === 201">xxx</p>
<p v-else>yyy</p>

<p v-show="status === 404">error</p>

<!-- template 只能和 v-if 搭配使用 -->
<template v-if="status === 200">
  <p>111</p>
  <p>222</p>
  <p>333</p>
</template>
```

## v-if 和 v-show 的区别

实现原理不同：

- `v-if` 通过创建或删除 DOM 元素来控制元素的显示与隐藏
- `v-show` 通过添加或删除元素的 `style="display: none"` 样式来控制元素的显示与隐藏
  性能消耗不同：

- `v-if` 切换开销更高，如果运行时条件很少改变，使用 `v-if` 更好
- `v-show` 初始渲染开销更高，如果切换频繁，使用 `v-show` 更好
