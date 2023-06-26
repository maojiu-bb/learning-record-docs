# 属性绑定指令 v-bind

通过`v-bind`来绑定属性，通常可以简写为`:`。

```html
<input type="text" v-bind:placeholder="desc" />

<!-- v-bind 简写形式 -->
<img :src="url" alt="这是一张图片" />

<!-- v-bind 支持 JS 表达式 -->
<div :id="'hello' + 1"></div>
```

```js
data() {
  return {
    desc: '请输入用户名',
    url: 'www.baidu.com',
    name: 'hello'
  }
}
```
