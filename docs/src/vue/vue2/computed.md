# computed 计算属性

- 定义：使用的属性不存在，要通过已有属性计算得到
- 原理：底层使用了 `Object.defineProperty()` 提供的 getter 和 setter
- getter 何时执行：
  - 初次读取时执行一次
  - 依赖的数据发生改变时执行
- 优点：与 `methods` 相比，有缓存机制，效率更高
- 若计算属性要修改，必须声明 setter 响应修改，且 setter 中要引起依赖的数据发生改变

```html
<span>{{ fullName }}</span>
```

```js
// 完整写法
computed: {
  fullName: {
    get() {
      // 计算属性依赖于已有属性得到
      return this.firstName + '-' + this.lastName
    }
    set(value) {
      // setter 中要引起依赖数据的变化
      const arr = value.split('-')
      this.firstName = arr[0]
      this.lastName = arr[1]
    }
  }
}

// 简写形式
// 只有明确计算属性不需要被修改时，才能用简写形式，即没有 setter
computed: {
  fullName() {
    return this.firstName + this.lastName
  }
}
```
