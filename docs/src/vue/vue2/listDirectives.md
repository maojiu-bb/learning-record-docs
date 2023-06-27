# 列表渲染指令 v-for

## 基本用法

```html
<!-- 遍历数组 -->
<ul>
  <li v-for="(item, index) in list" :key="item.id">{{ item.name }}</li>
</ul>

<!-- 遍历对象 -->
<ul>
  <li v-for="(value, key) in obj" :key="key">{{ key }} - {{ value }}</li>
</ul>

<!-- 遍历字符串 -->
<ul>
  <li v-for="(char, index) in str" :key="index">{{ index }} - {{ char }}</li>
</ul>

<!-- 遍历次数 -->
<ul>
  <li v-for="(number, index) in 5" :key="index">{{ index }} - {{ number }}</li>
</ul>
```

```js
data() {
  return {
    list: [...],
    obj: {
      name: 'Bruce',
      age: 88,
      sex: 'unknown'
    },
    str: 'hello vue'
  }
}

```

## `key` 的作用

### `key` 的作用：

- 当列表的数据变化时，默认情况下，vue 会尽可能的复用已存在的 DOM 元素，从而提升渲染的性能。但这种默认的性能优化策略，会导致有状态的列表无法被正确更新。
- 为了给 vue 一个提示，以便它能跟踪每个节点的身份，从而在保证有状态的列表被正确更新的前提下，提升渲染的性能。此时，需要为每项提供一个唯一的 key 属性。
- key 是虚拟 DOM 对象的标识，可提高页面更新渲染的效率。当数据变化时，Vue 会根据新数据生成新的虚拟 DOM，随后进行新旧虚拟 DOM 的差异比较

### 比较规则

- 旧虚拟 DOM 找到和新虚拟 DOM 相同的 key：
  - 若内容没变，直接复用真实 DOM
  - 若内容改变，生成新的真实 DOM，替换旧的真实 DOM
- 旧虚拟 DOM 未找到和新虚拟 DOM 相同的 key：创建新的真实 DOM，渲染到页面

### key 的注意事项：

- key 的值只能是**字符串**或**数字**类型
- key 的值必须具有唯一性（即：key 的值不能重复）
- 建议把数据项 id 属性的值作为 key 的值（因为 id 属性的值具有唯一性）
- 使用 index 的值当作 key 的值没有意义（因为 index 的值不具有唯一性）
- 建议使用 v-for 指令时一定要指定 key 的值（既提升性能、又防止列表状态紊乱）

![key](/image/key.png)
