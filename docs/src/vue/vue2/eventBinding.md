# 事件绑定指令 v-on

## v-on 基础用法

```html
<p>count的值：{{ count }}</p>
<button v-on:click="add">+1</button>

<!-- v-on 缩写形式 -->
<button @click="add">+1</button>
```

```js
data() {
  return {
    count: 1
  }
},
methods: {
  add() {
    this.count++
  }
}
```

## 事件参数对象

如果事件处理函数没有传参，则默认会传一个时间参数对象 $event ，通过它可以获取触发事件的元素，并进行相关操作。

```js
methods: {
  add(e) {
    e.target.style.backgroundColor = 'red'
    this.count++
  }
}

```

如果事件处理函数传递参数了，则默认的 $event 会被覆盖，需要手动进行传递。

```html
<button @click="add(2, $event)">+1</button>
```

```js
methods: {
  add(step, e) {
    e.target.style.backgroundColor = 'red'
    this.count += step
  }
}
```

## 事件修饰符

| 事件修饰符 |                         说明                         |
| :--------: | :--------------------------------------------------: |
|  .prevent  |        阻止默认行为，如 a 链接跳转、表单提交         |
|   .stop    |                     阻止事件冒泡                     |
|   .once    |                绑定的事件只触发 1 次                 |
|  .capture  |              以捕获模式触发事件处理函数              |
|   .self    | 只有在 event.target 是当前元素自身时触发事件处理函数 |
|  .passive  |   事件的默认行为立即执行，无需等待事件回调执行完毕   |

```html
<a href="www.baidu.com" @click.prevent="fn">阻止链接跳转</a>

<div @click.stop="handleClick">阻止事件冒泡</div>

<!-- .passive ：如 `onwheel` 鼠标滚轮事件，是先执行事件的回调再进行滚动。 -->

<!-- 如果回调比较耗时，那么会等一段时间才发生滚动。 添加 .passive 后，则先进行滚动再执行回调。 -->
```

## 按键修饰符

1.Vue 中常用的按键别名：

- 回车 => enter
- 删除 => delete (捕获“删除”和“退格”键)
- 退出 => esc
- 空格 => space
- 换行 => tab (特殊，必须配合 keydown 去使用)
- 上 => up
- 下 => down
- 左 => left
- 右 => right
  2.Vue 未提供别名的按键，可以使用按键原始的 `key` 值去绑定，但注意要转为 kebab-case（短横线命名）

  3.系统修饰键（用法特殊）：ctrl、alt、shift、meta（即 win 键）

- 配合 keyup 使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
- 配合 keydown 使用：正常触发事件。 4.可使用 keyCode 去指定具体的按键，此法不推荐，因为 keyCode 以后可能废除

  5.`Vue.config.keyCodes.自定义键名 = 键码` ，可以去定制按键别名

```html
<input type="text" @keyup.enter="submit" />
<input type="text" @keyup.esc="back" />
<input type="text" @keydown.tab="showInfo" />
<input type="text" @keyup.caps-lock="showInfo" />

<input type="text" @keyup.huiche="showInfo" />
<input type="text" @keyup.13="showInfo" />
<script>
  Vue.config.keyCodes.huiche = 13
</script>
```
