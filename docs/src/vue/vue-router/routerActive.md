# 路由高亮

被激活的路由链接，默认会添加 `router-link-active` 的类名。可据此为激活的路由链接设置高亮的样式：

```css
.router-link-active {
  color: white;
  background-color: pink;
}
```

定义路由模块时可以自定义路由链接被激活时添加的类名：

```js
const router = new VueRouter({
  // 默认的 router-link-active 会被覆盖
  linkActiveClass: 'active-hello',
  routes
})
```

声明路由链接时也可用 `active-class` 属性自定义激活类名：

```html
<!-- router-link-active 会被覆盖为 active -->
<router-link active-class="active" to="/about">About</router-link>
```
