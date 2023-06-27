# keep-alive

默认情况下，切换动态组件时无法保持组件的状态。此时可以使用 vue 内置的 `<keep-alive>` 组件保持动态组件的状态，对被包裹的组件进行状态缓存。

被 `<keep-alive>` 包裹的组件会多出两个生命周期函数：当组件被激活时，触发 `activated` 钩子；当组件被缓存时，触发` deactivated` 钩子。

```html
<keep-alive>
  <component :is="comName"></component>
</keep-alive>
```

`<keep-alive>` 的 `include` 和 `exclude` 属性，分别用于指明哪些组件要缓存、哪些组件不要缓存。

```html
<keep-alive include="Left, Right">
  <component :is="comName"></component>
</keep-alive>

<keep-alive :include="['News', 'Message']">
  <router-view></router-view>
</keep-alive>
```
