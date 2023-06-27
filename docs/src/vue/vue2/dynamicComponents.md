# 动态组件

vue 提供了内置的 `<component>` 组件用于动态切换组件。

```html
<!-- 通过 is 属性指定要渲染的组件，传递的是字符串 -->
<component :is="comName"></component>

<button @click="comName = 'Left'">展示Left组件</button>
<button @click="comName = 'Right'">展示Right组件</button>
```
