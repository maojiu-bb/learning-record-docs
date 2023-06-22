# 基本使用

## html 基本结构

一个 html 文件有着下面这样的结构:

- demo.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

- `title`: 为浏览器页签的标题
- `body`: 为书写主要 html 代码的位置

## `!DOCTYPE` 的作用

DOCTYPE 是文档类型 document type 的缩写，指明浏览器使用哪种 HTML 规范来解析页面。

若不添加，则采用混杂模式，每种浏览器都采用自身的方式解析渲染页面，导致页面效果可能不同。

添加之后，采用标准模式，每种浏览器都按照统一的 HTML 标准解析渲染页面。

**相关链接**

[深入理解 DOCTYPE 的作用](https://blog.csdn.net/qq_38128179/article/details/80758192)

## 获取 `html` `head` `body` 标签

```js
document.documentElement
document.head
document.body
```

## 常用 html 元素

有太多的 html 元素， 这里不 一 一 列举了，常用的有下面这些：

```html
<div>
  <p>
    <span></span>
  </p>
</div>
```

更多元素请查看：[MDN Web Docs 文档](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)
