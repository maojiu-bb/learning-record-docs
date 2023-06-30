# 其它 Composition API

## shallowReactive & shallowRef

- `shallowReactive`：只处理对象最外层属性的响应式，即浅响应式
- `shallowRef`：基本数据类型和 ref 相同，对象数据不再会调用 `reactive`，因此只有对象引用改变了才是响应式的
- 若一个对象数据，结构很深，但只有最外层属性变化，可用 `shallowReactive`
- 若一个对象数据，属性不会改变，而是使用新对象替换，可用 `shallowRef`

```js
import { shallowReactive, shallowRef } from 'vue'

setup() {
  let person = shallowReactive({
    name: 'Vue3',
    age: 21,
    info: {
      job: {
        salary: 22
      }
    }
  })
  let x = shallowRef({
    y: 0
  })
  return {
    person,
    x
  }
}
```

## readonly & shallowReadonly

- `readonly`: 让一个响应式数据变为只读的（深只读）
- `shallowReadonly`：让一个响应式数据变为只读的（浅只读）
- 应用场景: 不希望数据被修改时，如你用了别人的响应式数据，但是别人不希望你修改时

```js
setup() {
  let sum = ref(0)
  let person = reactive({...})

  sum = readonly(sum)
  person = shallowReadonly(person)

  return {
    sum,
    person
  }
}
```

## toRaw & markRaw

`toRaw`：

- 将一个由 `reactive` 生成的响应式对象转为普通对象
- 用于读取响应式对象对应的普通对象，对该普通对象的操作不会引起页面更新
  `markRaw`：

- 标记一个对象，让其不成为响应式对象
- 有些值不应设置为响应式，比如复杂的第三方库
- 当渲染复杂且不变的数据时，跳过响应式转换可提高性能
- 注意：仅仅让数据变为非响应式的，数据变的依旧变，只是没引起页面更新

```js
setup() {
  function showRawPerson() {
    const p = toRaw(person);
    p.age++;
    console.log(p);
    console.log(person);
  }

  function addCar() {
    let car = { name: "奔驰", price: 40 };
    person.car = markRaw(car);
  }
}
```

## customRef

创建一个自定义的 `ref`，并对其依赖项跟踪和更新触发进行显式控制

```html
<input type="text" v-model="keyword" />
<h3>{{ keyword }}</h3>
```

```js
import { ref, customRef } from 'vue'

export default {
  name: 'Demo',
  setup() {
    // 自定义 myRef
    function myRef(value, delay) {
      let timer
      // 通过customRef去实现自定义
      return customRef((track, trigger) => {
        //
        return {
          get() {
            //告诉Vue这个value值是需要被“追踪”的
            track()
            return value
          },
          set(newValue) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              // 告诉Vue去更新界面
              trigger()
            }, delay)
          }
        }
      })
    }
    let keyword = myRef('hello', 500)
    return {
      keyword
    }
  }
}
```

## provide / inject

实现祖先组件与后代组件之间通信。

![provide-inject](/image/provide-inject.png)

```js
// 祖先组件传递数据
import { provide, reactive, ref } from 'vue'

setup() {
  let car = reactive({...})
  let sum = ref(0)

  provide('sum', sum)
  provide('car', car)
}
```

```js
// 后代组件接收数据
import { inject } from 'vue'

setup() {
  const car = inject('car')
  const sum = inject('sum')
  return { car, sum }
}
```

## 响应式数据的判断

- `isRef`: 检查一个值是否为一个 `ref` 对象
- `isReactive`: 检查一个对象是否是由 `reactive` 创建的响应式代理
- `isReadonly`: 检查一个对象是否是由 `readonly` 创建的只读代理
- `isProxy`: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理
