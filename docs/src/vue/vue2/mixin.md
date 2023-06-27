# Mixin 混入

- Mixin 可以把多个组件共用的配置提取成一个混入对象
- 混入和组件自身的配置会合并
- `data` `、methods` 若冲突以自身为准
- 对于生命周期钩子，执行动作会合并，且先执行 Mixin 里的动作
  定义混入：

```js
// mixin.js
export const mixin = {
  methods: {
    showName() {
      alert(this.name)
    }
  },
  mounted() {
    console.log('hello mixin')
  }
}
export const mixin2 = {
  data() {
    return {
      x: 100,
      y: 200
    }
  }
}
```

使用局部混入：

```js
import { mixin, mixin2 } from '../mixin.js'

export default {
  name: 'School',
  data() {
    return {
      schoolName: '北大'
    }
  },
  mixins: [mixin, mixin2]
}
```

使用全局混入：

```js
// main.js
import { mixin, mixin2 } from './mixin.js'

Vue.mixin(mixin)
Vue.mixin(mixin2)
```
