# 自定义指令

## 分类

- 私有自定义指令：在组件的 `directives` 节点声明
- 全局自定义指令：在 `main.js` 文件中声明

## 完整写法

```html
<input type="text" v-focus="content" />
```

```js
data() {
  return {
    content: 666
  }
},
directives: {
  focus: {
    // 指令与元素成功绑定时执行，执行一次
    bind(el, binding) {
      el.value = binding.value
    }

    // 指令所在元素插入页面时执行，执行一次
    inserted(el, binding) {
      // 一进入页面输入框获得焦点
      el.focus()
    }

    // 指令所在元素重新解析（个人觉得不应是渲染，而是解析，重新解析不一定重新渲染）时执行，执行 0+N 次
    update(el, binding) {
      el.value = binding.value
    }
  }
}

// 全局写法
Vue.directive('focus', {
  bind(el, binding) {
    el.value = binding.value
  }
  inserted(el, binding) {
    el.focus()
  }
  update(el, binding) {
    el.value = binding.value
  }
})
```

## 简写形式

- 当 `bind` 函数和 `update` 函数里的逻辑完全相同时，可以简写
- 不需要定义 `inserted` 函数才使用简写形式
- 因此简写形式的调用时机：初次绑定和 DOM 更新（指令所在模板被重新解析）

```html
<h2 v-color="'red'">简写形式</h2>
```

```js
directives: {
  color(el, binding) {
    el.style.color = binding.value
  }
}

// 全局写法
Vue.directive('color', (el, binding) => {
  el.style.color = binding.value
}))
```

## 注意事项

- 自定义指令使用时需要添加 `v-` 前缀
- 指令名如果是多个单词，要使用 `kebab-case` 短横线命名方式，不要用 `camelCase` 驼峰命名
- 自定义指令三个函数里的 `this` 指向 `window`

```html
<span v-big-number="n"></span>
```

```js
data() {
  return {
    n: 1
  }
},
directives: {
  // 添加引号才是对象键名完整写法
  // 平时不加引号都是简写形式
  // 遇到短横线的键名就必须添加引号
  'big-number': {
    bind(el, binding) {
      console.log(this) // Window
      el.innerText = binding.value * 10
    }
  }
}
```
