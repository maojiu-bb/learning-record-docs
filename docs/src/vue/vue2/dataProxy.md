# 数据代理

## `Object.defineProperty()` 的使用

```js
let person = {
  name: 'Vue',
  sex: 'none',
}
let number = 19

// 配置一
// 参数：对象、属性名、配置
Object.defineProperty(person, 'age', {
  // 属性值
  value: 21,
  // 属性是否可修改
  writable: true,
  // 属性是否可枚举（遍历）
  enumerable: true,
  // 属性是否可删除
  configurable: true,
})

Object.keys(person)

// 配置二
// getter、setter 不能和 value、writable 同时指定
Object.defineProperty(person, 'age', {
  enumberable: true,
  configurable: true,

  get() {
    console.log('age 属性被读取')
    return number
  }

  set(value) {
    console.log('age 属性被修改', value)
    number = value
  }
})
```

## 何为数据代理

数据代理：通过一个对象对另一个对象的属性进行操作

```js
let obj = { a: 21 }
let obj2 = { b: 10 }

Object.defineProperty(obj2, 'a', {
  get() {
    return obj.a
  }
  set(value) {
    obj.a = value
  }
})

obj2.a // 21
obj2.a = 1000
obj.a // 1000
```

## Vue 中的数据代理

![数据代理](/image/dataProxy.png)

Vue 中通过 vm 实例对象代理对 data 对象属性的操作，让我们更方便操作 data 中的数据。

data 中的数据实际上被存在 `vm._data` 属性上，如果不进行代理，使用起来很不方便。

通过 `Object.defineProperty()` 给 vm 添加属性，并且指定 getter 和 setter，通过 getter 和 setter 访问和修改 data 对应是属性。
