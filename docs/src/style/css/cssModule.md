# CSS Modules

CSS 不是编程语言，是一种网页样式描述的手段。

但程序员希望将其改造得像编程语言，于是 scss、less 出现了。

而 CSS Modules 为 CSS 增加了**局部作用域**和**模块依赖**两个功能。

## 局部作用域

我们都知道，CSS 是全局生效的，每个组件的样式都会对全局起作用。

要产生局部作用域，即避免样式冲突，就是使用唯一的类名。

但我们无法保证自己的类名不会与别人重复。

此时，CSS Modules 就有用武之地了。

```css
.title {
  color: blue;
}
```

```js
import React from 'react';
import style from './App.css';

export default () => {
  return (
    <h1 className={style.title}>
      Hello World
    </h1>
```

`style.title` 会被构建工具编译成哈希字符串

```html
<h1 class="_3zyde4l1yATCOkgn-DBWEL">Hello World</h1>
```

```css
._3zyde4l1yATCOkgn-DBWEL {
  color: red;
}
```

这样，类名就是唯一的了。

**相关链接**

[CSS Modules 用法教程](https://www.ruanyifeng.com/blog/2016/06/css_modules.html)
