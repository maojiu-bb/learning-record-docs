# 新的组件

## Fragment

- 在 Vue2 中: 组件必须有一个根标签
- 在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 `Fragment` 虚拟元素中
- 好处: 减少标签层级, 减小内存占用

## Teleport

- 将包裹的 HTML 结构移动到指定元素的末尾
- to 属性为 CSS 选择器
  简易的模态框效果：

```html
<teleport to="#root">
  <div v-if="isShow" class="mask">
    <div class="dialog">
      <h3>我是一个弹窗</h3>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </div>
</teleport>
```

```css
.mask {
  /* 遮罩层铺满窗口 */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 300px;
  height: 300px;
  background-color: green;
}
```

## Suspense

- 等待异步组件时渲染额外内容，让用户体验更好

异步引入组件：

```js
import { defineAsyncComponent } from 'vue'
const Child = defineAsyncComponent(() => import('./components/Child.vue'))
```

使用 `Suspense` 包裹组件，实际上是往插槽填充内容，`default` 插槽填充组件内容，`fallback` 插槽填充组件加载时显示的内容：

```html
<Suspense>
  <template v-slot:default>
    <Child />
  </template>
  <template v-slot:fallback>
    <h3>加载中，请稍等...</h3>
  </template>
</Suspense>
```

另外，若 `Child` 组件的 `setup` 函数返回一个 `Promise` 对象，也能渲染 `fallback` 里的内容：

```js
async setup() {
  let sum = ref(0)
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({sum})
    }, 3000)
  })
}
```
