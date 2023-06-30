# Setup 语法糖

官网中提到的优势：

- 更少的样板内容，更简洁的代码。
- 能够使用纯 TypeScript 声明 props 和自定义事件。
- 更好的运行时性能 (其模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象)。
- 更好的 IDE 类型推导性能 (减少了语言服务器从代码中抽取类型的工作)。

:::tip
查看完整信息->[Vue3 官网](https://cn.vuejs.org/api/sfc-script-setup.html)
:::

## 基本语法 ​

要启用该语法，需要在 `<script>` 代码块上添加 setup attribute：

```vue
<script setup>
console.log('hello script setup')
</script>
```

## 定义响应式数据

响应式状态需要明确使用响应式 API 来创建。和 `setup()` 函数的返回值一样，`ref` 在模板中使用的时候会自动解包：

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

## 定义函数

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

const add = () => count.value++
</script>
```

## 使用组件

```vue
<script setup>
import Child from './Child/index.vue'
</script>
<template>
  <Child></Child>
</template>
```

## 使用自定义指令 ​

全局注册的自定义指令将正常工作。本地的自定义指令在 `<script setup>` 中不需要显式注册，但他们必须遵循 `vNameOfDirective` 这样的命名规范：

```vue
<script setup>
const vMyDirective = {
  beforeMount: (el) => {
    // 在元素上做些操作
  }
}
</script>
<template>
  <h1 v-my-directive>This is a Heading</h1>
</template>
```

如果指令是从别处导入的，可以通过重命名来使其符合命名规范：

```vue
<script setup>
import { myDirective as vMyDirective } from './MyDirective.js'
</script>
```

## defineProps()

在 `setup` 语法糖里面使用 `defineProps` 来定义 `props`，可以更好的配合 `ts` 一起使用，以获得更好的类型推导。

```vue
<script setup>
const props = defineProps({
  foo: String,
  bar: Number
})
</script>
```

配合 ts 使用：

```vue
<script setup lang="ts">
interface Props {
  foo: string
  bar: number
}
const props = defineProps<Props>()
</script>
```

## defineEmits()

在 `setup` 语法糖里面使用 `defineEmits` 来定义 `emits`，可以更好的配合 `ts` 一起使用，以获得更好的类型推导。

```vue
<script setup>
const emits = defineEmits(['change', 'update'])
</script>
```

配合 ts 使用：

```vue
<script setup lang="ts">
const emits = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>
```

更简洁的写法：

```vue
<script setup lang="ts">
const emits = defineEmits<{
  change: [id: number]
  update: [value: string]
}>()
</script>
```

:::tip
更多的信息请前往[Vue3 官网](https://cn.vuejs.org/api/sfc-script-setup.html#basic-syntax)查看
:::
