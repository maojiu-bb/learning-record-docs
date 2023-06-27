# scoped 解决样式冲突

- 原理：为当前组件所有 DOM 元素分配唯一的自定义属性，写样式时使用属性选择器防止样式冲突问题
- `scoped` 只给子组件最外层的 div 添加了自定义属性 `[data-v-xxx]` ，子组件内部的标签并没有添加。因此父组件只能修改子组件最外层的 div 样式，修改子组件内层元素的样式是不可行的
- 若想让某些样式对子组件生效，需使用 `/deep/` 深度选择器

```css
/* 细细品味 */
<style lang="less" scoped>
.title {
  /* 不加 /deep/，选择器格式为 .title[data-v-052242de] */
  color: blue;
}

/deep/ .title {
  /* 加 /deep/，选择器格式为 [data-v-052242de] .title */
  color: blue;
}
</style>
```
