# 动态绑定 class 和 style

通过动态绑定 `class` 属性和行内 `style` 样式，可动态操作元素样式。

## 动态绑定 class 类名

- 字符串写法：类名不确定，要动态获取
- 对象写法：要绑定多个样式，个数不确定，名字也不确定
- 数组写法：要绑定多个样式，个数确定，名字也确定，但不确定用不用

```css
<style>
  .happy {
    ...;
  }
  .sad {
    ...;
  }
</style>
```

```html
<div class="basic" :class="mood" @click="changeMood">字符串写法</div>
<div class="basic" :class="arr">数组写法</div>
<div class="basic" :class="classObj">对象写法</div>
```

```js
export default {
  data() {
    return {
      mood: 'happy',
      arr: ['happy', 'sad'],
      classObj: {
        happy: true,
        sad: false
      }
    }
  },
  methods: {
    changeMood() {
      this.mood = 'sad'
    }
  }
}
```

## 动态绑定 style 样式

css 属性名既可以用驼峰形式，也能用短横线形式（需要使用引号括起来）。

```html
<div
  :style="{color: active, fontSize: fsize + 'px', 'background-color': bgcolor}"
>
  对象写法
</div>
<div :style="styleObj">对象写法</div>

<div :style="[styleObj, styleObj2]">数组写法（用得少）</div>
```

```js
data() {
  return {
    active: 'red',
    fsize: 30,
    bgcolor: 'yellow',
    styleObj: {
      color: 'active',
      'font-size': '20px'
    },
    styleObj2: {
      backgroundColor: 'yellow'
    }
  }
}
```
