# 前言

## 为什么需要打包工具？

开发时，我们会使用框架（React、Vue），ES6 模块化语法，Less/Sass 等 css 预处理器等语法进行开发。

这样的代码要想在浏览器运行必须经过编译成浏览器能识别的 JS、Css 等语法，才能运行。

所以我们需要打包工具帮我们做完这些事。

除此之外，打包工具还能压缩代码、做兼容性处理、提升代码性能等。

## 有哪些打包工具？

- Grunt
- Gulp
- Parcel
- Webpack
- Rollup
- Vite
- ...

目前市面上最流量的是 Webpack，所以我们主要以 Webpack 来介绍使用打包工具

::: tip
这里的内容摘录自[尚硅谷 webpack5 教程](https://yk2012.github.io/sgg_webpack5/)
:::

:::tip
这里只是介绍基本的使用

更多请查看[webpack 官方文档](https://www.webpackjs.com/)
:::
