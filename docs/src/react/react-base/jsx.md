# JSX 基础

## 1. JSX 介绍

- 概念：JSX 是 JavaScript XML（HTML）的缩写，表示在 JS 代码中书写 HTML 结构

- 作用：在 React 中创建 HTML 结构（页面 UI 结构）

- 优势：

1. 采用类似于 HTML 的语法，降低学习成本，会 HTML 就会 JSX
2. 充分利用 JS 自身的可编程能力创建 HTML 结构

- 注意：JSX 并不是标准的 JS 语法，是 JS 的语法扩展，浏览器默认是不识别的，脚手架中内置的 [@babel/plugin-transform-react-jsx]() 包，用来解析该语法

![jsx](/image/jsx02.png)

## 2. JSX 中使用 js 表达式

- 语法
  `{ JS 表达式 }`

```jsx
const name = 'maojiu'

<h1>你好，我叫{name}</h1>   //    <h1>你好,我叫maojiu</h1>
```

- 可以使用的表达式

1. 字符串、数值、布尔值、null、undefined、object（ [] / {} ）

2. 1 + 2、'abc'.split('')、['a', 'b'].join('-')

3. fn()

- 特别注意
  > if 语句/ switch-case 语句/ 变量声明语句，这些叫做语句，不是表达式，不能出现在 {} 中！！

## 3. JSX 列表渲染

页面的构建离不开重复的列表结构，比如歌曲列表，商品列表等，我们知道 vue 中用的是`v-for`，react 这边如何实现呢？

- 实现：使用数组的 `map` 方法

```jsx
// 来个列表
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

function App() {
  return (
    <div className="App">
      <ul>
        {songs.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
```

注意点：需要为遍历项添加 `key` 属性

![jsx error](/image/jsx03.png)

1. key 在 HTML 结构中是看不到的，是 React 内部用来进行性能优化时使用
2. key 在当前列表中要唯一的字符串或者数值（String/Number）
3. 如果列表中有像 id 这种的唯一值，就用 id 来作为 key 值
4. 如果列表中没有像 id 这种的唯一值，就可以使用 index（下标）来作为 key 值

## 4. JSX 条件渲染

- 作用：根据是否满足条件生成 HTML 结构，比如 Loading 效果
- 实现：可以使用 `三元运算符` 或 `逻辑与(&&)运算符`

```jsx
// 来个布尔值
const flag = true
function App() {
  return (
    <div className="App">
      {/* 条件渲染字符串 */}
      {flag ? 'react真有趣' : 'vue真有趣'}
      {/* 条件渲染标签/组件 */}
      {flag ? <span>this is span</span> : null}
    </div>
  )
}
export default App
```

## 5. JSX 样式处理

- 行内样式 - `style`

```jsx
function App() {
  return (
    <div className="App">
      <div style={{ color: 'red' }}>this is a div</div>
    </div>
  )
}
export default App
```

- 行内样式 - `style` - 更优写法

```jsx
const styleObj = {
  color: red
}

function App() {
  return (
    <div className="App">
      <div style={styleObj}>this is a div</div>
    </div>
  )
}

export default App
```

- 类名 - `className`（推荐）

```css
.title {
  font-size: 30px;
  color: blue;
}
```

- 类名 - `className` - 动态类名控制

```jsx
import './app.css'
const showTitle = true
function App() {
  return (
    <div className="App">
      <div className={showTitle ? 'title' : ''}>this is a div</div>
    </div>
  )
}
export default App
```

## 6. JSX 注意事项

1. JSX 必须有一个根节点，如果没有根节点，可以使用 `<></>`（幽灵节点）替代
2. 所有标签必须形成闭合，成对闭合或者自闭合都可以
3. JSX 中的语法更加贴近 JS 语法，属性名采用驼峰命名法 `class -> className` `for -> htmlFor`
4. JSX 支持多行（换行），如果需要换行，需使用() 包裹，防止 bug 出现
