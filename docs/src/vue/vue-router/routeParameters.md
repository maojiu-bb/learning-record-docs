# 路由传参

## query 参数

传递参数：

```html
<!-- 字符串写法 -->
<router-link :to="`/home/detail?id=${id}&title=${title}`"
  >字符串写法</router-link
>
<!-- 对象写法 -->
<router-link
  :to="{
    path: '/home/detail',
    query: {
      id: 1,
      title: 'hello',
    }
  }"
>
  对象写法
</router-link>
```

```js
this.$router.push(`/home/detail?id=${id}&title=${title}`)
this.$router.push({ path: '/home/detail', query: { id: 1, title: 'query' } })
```

接收参数：

```js
this.$route.query.id
this.$route.query.title
```

## params 参数（动态路由）

动态路由是把 Hash 地址中可变的部分定义为参数项，从而提高路由规则的复用性。

声明 params 参数：

```js
// 定义动态路由参数
{ path: '/movie/:id/:age', component: Movie }

// 以下类似的路由规则都能合并为上述规则，复用性得到提高
{ path: '/movie/1/21', component: Movie }
{ path: '/movie/2/22', component: Movie }
{ path: '/movie/3/23', component: Movie }
```

传递 params 参数：

```html
<router-link :to="/movie/1/21">字符串写法</router-link>
<!-- 对象写法只能和 name 搭配使用，不能和 path 搭配 -->
<router-link
  :to="{
  name: 'movie',
  params: {
    id: 1,
    age: 21
  }
}"
>
  对象写法
</router-link>

<!-- query 和 params 可以一起用 -->
<router-link :to="`/movie/1/21?id=${id}`">字符串写法</router-link>
<router-link
  :to="{
    name:'movie', 
    params: {id:1, age:21}, 
    query: {school: 'love'}
  }"
>
  对象写法
</router-link>
```

```js
this.$router.push(`/movie/1/21?id=${id}`)
this.$router.push({
  name: 'movie',
  params: { id: 1, age: 21 },
  query: { school: 'love' }
})
```

接收 params 参数：

```html
<template>
  <div class="movie-container">
    <h1>Movie组件，参数值：{{ this.$route.params.id }}</h1>
  </div>
</template>
```

## 路由的 props 配置

简化路由组件接收参数。

在路由规则中开启 `props` 传参，组件可以使用 `props` 接收路由参数：

```js
{
  path: '/movie/:id/:title',
  component: Movie,

  // 方式一：该对象中的所有 key-value 都会以 props 的形式传给组件
  // 该方式是写死的，少用
  props: {id: 666, title: 'hello'}

  // 方式二：把 params 参数以 props 的形式传给组件
  // 只能接收 params 参数
  props: true

  // 方式三：函数写法，啥都能传
  props($route) {
    return {
      id: $route.query.id,
      title: $route.params.title,
      age: 21
    }
  }
}
```

组件接收参数：

```js
export default {
  // 使用 props 接收路由规则的参数项
  props: ['id', 'title']
}
```

```html
<template>
  <h1>Movie组件，参数值：{{ id }}，题目：{{ title }}</h1>
</template>
```

## 路由传参注意事项

1.path 不能和 params 一起使用。path+query、name+query/params 都行 2.如何指定 params 参数可传可不传？

- 若声明了 params 参数 `path: '/movie/:title'`，默认是必须要传递 params 参数的，否则 URL 会出现问题
- 指定 params 参数可不传：`path: '/movie/:title?'` 3.已指明 params 参数可传可不传，但如果传递空串，如何解决？
- 传递空串，URL 也会出现问题
- 方法：使用 `undefined`

```js
this.$router.push({
  name: 'search',
  params: { keyword: '' },
  query: { key: this.key }
})
this.$router.push({
  name: 'search',
  params: { keyword: '' || undefined },
  query: { key: this.key }
})
```
