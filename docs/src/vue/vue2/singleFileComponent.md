# 单文件组件

## 单文件组件

单文件组件即 `.vue` 文件

## 非单文件组件

非单文件组件即所有组件写在同一个文件里。

### 基本使用

定义组件：

- 使用 Vue.extend(options) 创建，和 new Vue(options) 的区别；

  - el 不写，最终所有的组件都要经过 vm 的管理，由 vm 的 el 决定服务哪个容器
  - data 必须写成函数，避免组件被复用时，数据存在引用关系
  - 使用 template 节点可配置组件结构
    注册组件:

- 局部注册：components 选项
- 全局注册：Vue.component('组件名',组件)
  使用组件：<school></school>

```html
<div id="root">
  <hello></hello>
  <school></school>
</div>
```

```js
// 创建 student 组件
const student = Vue.extend({
  template: `
    <div>
      <h2>学生姓名：{{studentName}}</h2>
    </div>
  `,
  data() {
    return {
      studentName: '张三'
    }
  }
})

// 创建 hello 组件
const hello = Vue.extend({
  template: `
    <div>	
      <h2>{{name}}</h2>
    </div>
  `,
  data() {
    return {
      name: 'Tom'
    }
  }
})

// 创建 school 组件
const school = Vue.extend({
  name: 'school',
  template: `
    <div>
      <h2>学校名称：{{name}}</h2>	
      <student></student>
    </div>
  `,
  data() {
    return {
      name: '北京大学'
    }
  },
  // 组件嵌套
  components: {
    student
  }
})

// 全局注册
Vue.component('hello', hello)

new Vue({
  el: '#root',
  // 局部注册
  components: {
    school
  }
})
```

注意事项：

1.组件名

- 一个单词：school, School
- 多个单词：my-school, MySchool(需要 vue-cli 支持)

  2.使用组件

- `<school></school>`
- `<school />`(需要 vue-cli 支持)

  3.const school = Vue.extend(options) 可简写为 const school = options。这是脚手架里 `<script>` 代码的简写来源。

```js
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

// 完整写法
const vc = Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  }
})
export default vc
```

## 关于 VueComponent 构造函数

1.组件本质是一个名为 `VueComponent` 的构造函数，不是程序员定义的，是 `Vue.extend` 生成的

```js
const school = Vue.extend({...})

console.dir(school) //ƒ VueComponent (options)
```

2.使用组件时，Vue 自动创建组件实例对象，即 `new VueComponent(options)` 是 Vue 做的

3.每次调用 `Vue.extend`，返回的都是一个全新的 `VueComponent` 构造函数

```js
const school = Vue.extend({...})
const student = Vue.extend({...})

console.log(school === student) // false
```

4.组件的 `this` 指向 `VueComponent` 实例对象，而非 Vue 实例对象

5.重要的内置关系：`VueComponent.prototype.__proto__ === Vue.prototype` ，这个改动使得组件实例对象得以访问 Vue 原型上的属性方法

![VueComponent](/image/VueComponent.png)
