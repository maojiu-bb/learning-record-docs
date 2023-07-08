# Todos 综合案例

![todos](/image/todos.png)

## 1. 准备开发环境

```bash
# 克隆项目到本地
$ git clone https://gitee.com/react-course-series/react-redux.git

# 安装所有依赖

$ yarn
# or
$ npm i
```

## 2. 渲染列表

> 1.  在组件中通过核心方法 useSelector 方法使用数据
> 2.  使用 map 方法进行列表遍历

```jsx
// 导入useSelector方法
import { useSelector } from 'react-redux'

// 从store中获取list数据
const { list } = useSelector(state => state.taskStore)


// 渲染列表
<ul className="todo-list">
  {list.map((task) => (
    <li key={task.id} className={task.done ? 'completed todo' : 'todo'}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.done}
          onChange={(e) => singleCheck(task.id, e)}
        />
        <label> {task.title} </label>
        <button
          className="destroy"
          onClick={() => delTask(task.id)}></button>
      </div>
    </li>
  ))}
</ul>
```

## 3. 实现删除

> 实现步骤：
>
> 1.  在 store 的 reducers 选项中定义修改数据的方法 然后导出
> 2.  在组件中通过 dispatch 函数触发方法的执行并传入 id 参数

```js
reducers:{
  // 删除的方法
   delTask (state, action) {
      state.list = state.list.filter(task => task.id !== action.payload)
   }
}

// 导出删除action函数
// 导出action函数
const { delTask } = taskStore.actions
export { delTask }
```

```jsx
// 导入生成dispatch方法的hook
import { useDispatch } from 'react-redux'

// 得到dispatch方法
const dispatch = useDispatch()

// 通过dispatch函数调用action并传入id
<button
  className="destroy"
  onClick={() => dispatch(delTask(task.id))}>
</button>
```

## 4. 切换单选状态

> 实现步骤：
>
> 1.  在 reducers 选项中创建切换状态的函数，内部通过传入的 id 找到要修改的项 进行取反
> 2.  组件中通过 dispatch 函数触发并传入 id

```js
reducers:{
  toggleTask (state, action) {
    const item = state.list.find(task => task.id === action.payload)
    item.done = !item.done
  }
}

// 解构导出
const { toggleTask } = taskStore.actions

// 导出action函数
export { toggleTask }
```

```jsx
<input
  className="toggle"
  type="checkbox"
  checked={task.done}
  onChange={() => dispatch(toggleTask(task.id))}
/>
```

## 5. 切换全选状态

> 实现思路：
>
> 1.  全选其实就是遍历数组中的所有项把每一项的 done 字段都改成 true
> 2.  反选其实就是遍历数组中的所有项把每一项的 done 字段都改成 false
> 3.  总之，done 字段的值始终和当前全选框的状态决定
>     实现步骤：
> 4.  在 store 中的 reducers 函数中定义修改数据的 action 函数控制 done 字段的变化
> 5.  导出相应的 action 函数 供组件使用
> 6.  组件中通过 checked 属性控制是否全选的 UI 显示，在 change 事件中触发 action

```js
reducers:{
  // 全选
  allCheck(state, action){
    state.list.forEach(item=>item.done = action.payload)
  }
}

// 导出action函数
const { allCheck } = taskStore.actions
export { allCheck }
```

```jsx
<input
  id="toggle-all"
  className="toggle-all"
  type="checkbox"
  checked={list.every((task) => task.done)}
  onChange={(e) => dispatch(allCheck(e.target.checked))}
/>
```

## 6. 新增实现

> 要求: 输入框中输入内容，用户在回车时可以实现添加功能

> 实现思路和步骤

> 在 redux 中定义新增的方法 addTask

> 在组件中通过受控的方式 记录输入框中的数据

> keyUp 事件中判断当前是否点击的是 enter[keyCode 为 13] 如果是通过 dispatch 执行修改

```js
// 新增: 按照list中item的对象结构 传入一个新的对象 push到数组中
reducer:{
   addTask (state, action) {
      state.taskList.push(action.payload)
   }
}
```

```jsx
// 1. 受控的方式存入用户输入数据
// 2.keyUp 判断点击的是enter dispatch触发修改数据的函数
const [keyword, setKeyword] = useState('')
const onChange = (e) => {
  setKeyword(e.target.value)
}
const onKeyUp = (e) => {
  if (e.keyCode === 13) {
    dispatch(
      addTask({
        id: 3,
        name: keyword,
        isDone: false
      })
    )
    setKeyword('')
  }
}

;<input
  className="new-todo"
  autoFocus
  autoComplete="off"
  placeholder="What needs to be done?"
  value={keyword}
  onChange={onChange}
  onKeyUp={onKeyUp}
/>
```
