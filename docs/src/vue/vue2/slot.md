# 插槽

## 何为插槽

插槽可以理解为组件封装期间，为用户预留的**内容占位符**。它是 vue 为组件封装者提供的能力，允许开发者在封装组件时，把**不确定的、希望由用户指定**的部分定义为插槽。

## 插槽基本用法

基础使用：

```html
<!-- 子组件中预留插槽 -->
<template>
  <div class="contianer">
    <h1>这是子组件</h1>
    <slot></slot>
  </div>
</template>

<!-- 父组件使用子组件时，向插槽填充内容 -->
<child-comp>
  <p>填充到插槽的内容</p>
</child-comp>
```

如果子组件没有预留插槽，那么父组件填充给子组件的自定义内容会被丢弃：

```html
<!-- 子组件没有预留插槽 -->
<template>
  <div class="contianer">
    <h1>这是子组件</h1>
  </div>
</template>

<!-- 父组件的自定义内容会被丢弃 -->
<child-comp>
  <p>这段自定义内容会被丢弃</p>
</child-comp>
```

子组件可以为插槽提供**后备内容**，当父组件没有提供自定义内容时，后备内容就会生效。

```html
<!-- 子组件提供后备内容 -->
<template>
  <div class="contianer">
    <h1>这是子组件</h1>
    <slot>这是后备内容，父组件没有提供自定义内容就会生效</slot>
  </div>
</template>

<!-- 父组件没有提供自定义内容 -->
<child-comp> </child-comp>
```

## 具名插槽

组件在预留插槽时可以设置 `name` 属性，为插槽指定名称，这种有具体名称的插槽就叫具名插槽。 没有设置 `name` 名称的插槽默认名称为 `default` 。

```html
<!-- 子组件预留多个具名插槽 -->
<template>
  <div class="contianer">
    <h1>这是子组件</h1>

    <slot name="title">title 具名插槽</slot>
    <hr />
    <slot name="content">content 具名插槽</slot>>
    <hr />
    <slot>没有设置 name 名称则默认为 default</slot>
    <slot name="default"></slot>
  </div>
</template>
```

父组件向具名插槽提供自定义内容

- 新的写法：包裹一个 `<template>` 标签，同时在 `<template`> 中通过 `v-slot:名称` 指明插槽的名称。简写形式为 `#名称` ，且 `v-slot` 只能使用在 `<template>` 和组件标签上，普通 HTML 标签不行
- 旧的写法：`slot="名称"` 指明插槽名称
- 如果不指定插槽名称，那么自定义内容会被填充到所有的 `default` 插槽当中
- 同一插槽填充多个内容，是追加不是覆盖

```html
<!-- 父组件向具名插槽提供自定义内容 -->
<child-comp>
  <h1 slot="title">《赠汪伦》</h1>

  <template v-slot:title>
    <h1>《静夜思》</h1>
  </template>

  <!-- 简写形式 -->
  <template #content>
    <p>床前明月光，疑是地上霜。</p>
    <p>举头望明月，低头思故乡。</p>
  </template>

  <template>
    <p>这段内容没有指定名称，会被填充到所有 default 插槽中。</p>
  </template>
</child-comp>
```

## 作用域插槽

- 组件可以为插槽绑定自定义属性 `props` ，这种插槽叫作用域插槽
- 理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定

```html
<!-- 子组件为插槽绑定 props 数据 -->
<template>
  <slot v-for="item in list" :user="item"></slot>
</template>
```

```js
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: 'Lily',
          state: true
        },
        {
          id: 2,
          name: 'Ben',
          state: false
        },
        {
          id: 3,
          name: 'Water',
          state: true
        }
      ]
    }
  }
}
```

父组件向插槽提供自定义内容时，可以接收作用域插槽提供的数据：

- 旧写法：`scope="scope"` 、`slot-scope="scope"`
- 新写法：`v-slot:default="scope"`

```html
<child-comp>
  <template #default="scope">
    <p>作用域插槽提供的数据：{{ scope }}</p>
  </template>

  <template slot-scope="scope" slot="default">
    <p>{{ scope }}</p>
  </template>
</child-comp>
```

其中接收到的数据 `scope` 是一个对象。

```js
// scope 的内容
{
  'user': {
    'id': 1,
    'name': 'Lily',
    'state': true
  }
}
```

在接收作用域插槽提供的数据时可以使用解构赋值。

```html
<child-comp>
  <template #default="{user}">
    <p>id：{{ user.id }}</p>
    <p>name：{{ user.name }}</p>
    <p>state：{{ user.state }}</p>
  </template>
</child-comp>
```
