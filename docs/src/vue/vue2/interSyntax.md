# 插值语法

```html
<p>用户名：{{ username }}</p>
<p>密码{{ password }}</p>

<!-- {{}} 支持简 JS 表达式 -->
<p>{{ flag ? 111 : 000}}</p>
```

```js
data() {
  return {
    username: 'docsify',
    password: 55520,
    flag: true
  }
}

```
