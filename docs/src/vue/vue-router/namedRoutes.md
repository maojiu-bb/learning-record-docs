# 命名路由

给路由命名，某些情况可简化路由跳转写法

```js
const routes = [
  {
    name: 'about',
    path: '/about',
    component: About
  }
]
```

```html
<router-link :to="{ name: 'about'} "></router-link>

<router-link
  :to="{ name: 'about', query: { id: 1, title: 'hello' }}"
></router-link>
```
