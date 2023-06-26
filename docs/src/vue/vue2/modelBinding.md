# 双向绑定指令 v-model

`v-model` 用于表单元素如 `input`，`textarea`，`select` 。

## v-model 基础用法

```html
<p>{{ username }}</p>
<input type="text" v-model:value="username" />
<input type="text" v-model="username" />

<p>{{ province }}</p>
<select v-model="province">
  <option value="">请选择</option>
  <option value="1">北京</option>
  <option value="2">上海</option>
  <option value="3">广州</option>
</select>
```

## v-model 指令修饰符

| 修饰符  |                作用                |               示例               |
| :-----: | :--------------------------------: | :------------------------------: |
| .number |       将用户输入转为数值类型       | `<input v-model.number="age" />` |
|  .trim  |       删除输入的首尾空白字符       |   `<input v-model.trim="msg">`   |
|  .lazy  | 当失去焦点时，才更新数据，类似防抖 |   `<input v-model.lazy="msg">`   |

## v-model 收集表单数据

- `<input type="text"/>` ，收集的是 `value` 值，用户输入的就是 `value` 值。
- `<input type="radio"/>` ，收集的是 `value` 值，且要给标签配置 `value` 值。
- `<input type="checkbox"/>`
  - 没有配置 `value` 属性，收集的就是 `checked`
  - 配置了 `value` 属性:
    - `v-model` 的初始值是非数组，那么收集的就是 `checked`
    - `v-model` 的初始值是数组，那么收集的的就是 `value` 组成的数组

```html
<div id="root">
  <form @submit.prevent="demo">
    账号：<input type="text" v-model.trim="userInfo.account" />

    密码：<input type="password" v-model="userInfo.password" />

    年龄：<input type="text" v-model.number="userInfo.age" />

    性别： 男<input
      type="radio"
      name="sex"
      v-model="userInfo.sex"
      value="male"
    />

    女<input type="radio" name="sex" v-model="userInfo.sex" value="female" />

    爱好： 学习<input type="checkbox" v-model="userInfo.hobby" value="study" />

    打游戏<input type="checkbox" v-model="userInfo.hobby" value="game" />

    吃饭<input type="checkbox" v-model="userInfo.hobby" value="eat" />

    所属校区
    <select v-model="userInfo.city">
      <option value="">请选择校区</option>
      <option value="beijing">北京</option>
      <option value="shanghai">上海</option>
      <option value="shenzhen">深圳</option>
      <option value="wuhan">武汉</option>
    </select>

    其他信息：
    <textarea v-model.lazy="userInfo.other"></textarea>
    <input type="checkbox" v-model="userInfo.agree" />阅读接受协议
    <button>提交</button>
  </form>
</div>
```

```js
data() {
  return {
    userInfo:{
      account:'',
      password:'',
      age:18,
      sex:'female',
      hobby:[],
      city:'beijing',
      other:'',
      agree:''
    }
  }
},
methods: {
  demo() {
    console.log(JSON.stringify(this.userInfo))
  }
}
```
