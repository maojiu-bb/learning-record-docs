# 其他改变

- 全局 API 的转移
  Vue3 将全局的 API，即：`Vue.xxx` 调整到应用实例 `app` 上：

|      Vue2 全局 API       |        Vue3 实例 API        |
| :----------------------: | :-------------------------: |
|      Vue.config.xxx      |       app.config.xxx        |
| Vue.config.productionTip |            移除             |
|      Vue.component       |        app.component        |
|      Vue.directive       |        app.directive        |
|        Vue.mixin         |          app.mixin          |
|         Vue.use          |           app.use           |
|      Vue.prototype       | app.config.globalProperties |

- data 选项应始终被声明为一个函数

- 过渡类名的更改：

```css
/* Vue2 */
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-leave,
.v-enter-to {
  opacity: 1;
}

/* Vue3 */
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-leave-from,
.v-enter-to {
  opacity: 1;
}
```

- 移除 keyCode 作为 v-on 的修饰符，同时也不再支持 config.keyCodes
- 移除 v-on.native 修饰符，子组件没有在 emits: ['close'] 声明的自定义事件作为原生事件处理
- 移除过滤器 filter
- ...
