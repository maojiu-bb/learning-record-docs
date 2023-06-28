# 声明式导航

`<router-link>` 4 个常用属性：

1.`to` 属性

- 用于指定跳转路由

```html
<router-link to="/about"></router-link>
```

2.`tag` 属性

- 指明 `<router-link>` 最终被渲染为何种标签，默认是 a 标签
- 渲染为其他标签也会监听点击，触发导航

```html
<router-link to="/about" tag="li">tag</router-link>

<li>tag</li>
```

3.`replace` 属性

- 路由跳转不会增加新的历史记录，而是替换当前历史记录

```html
<router-link to="/about" replace>About</router-link>
```

4.`active-class` 属性

- 指明路由被激活时添加的类名，默认为 `router-link-active`
- 详见路由高亮

```html
<router-link to="/about" active-class="active">About</router-link>
```
