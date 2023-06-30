# 开发中使用

在实际开发中，随着业务的增加，通常会有很多个 store，对此，我们可以进行一定的处理方便我们的开发。

- 目录结构：

```bash
    ...
    |         |--modules--|--userStore.ts
---src--store-|
    |         |--index.ts
    ...
```

- store/index.ts

```ts
// 状态数据统一管理仓库

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { userStore } from './modules/userStore'

// 创建仓库示例
const pinia = createPinia()
// 使用 pinia 持久化存储插件
pinia.use(piniaPluginPersistedstate)

export {
  // 模块化的仓库
  userStore
}

export default pinia
```

这里使用了`piniaPluginPersistedstate`插件来对 pinia 数据做持久化存储。

- store/modules/userStore.ts

```ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userStore = defineStore('user', () => {
  const username = ref<string>('666')
  const password = ref<string>('123456')

  const changeUserName = (value: string) => {
    username.value = value
  }

  return {
    username,
    password,
    changeUserName
  }
})
```

- 在组件中使用：

```vue
<script setup lang="ts">
import { userStore } from './store/index'
const user_store = userStore()
const { username, password } = storeToRefs(user_store)
const { changeUserName } = user_store
</script>

<template>
  <div>
    <span>{{ username }}</span>
    <span>{{ password }}</span>
    <button @click="changeUserName('maojiu')">changeName</button>
  </div>
</template>
```
