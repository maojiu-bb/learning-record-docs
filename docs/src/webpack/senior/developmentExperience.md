# 提升开发体验

## SourceMap

## 为什么

开发时我们运行的代码是经过 webpack 编译后的，例如下面这个样子：

```js
/\*

- ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
- This devtool is neither made for production nor for readable output files.
- It uses "eval()" calls to create a separate source file in the browser devtools.
- If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
- or disable the default devtool with "devtool: false".
- If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
  \*/
  /**\*\***/ (() => { // webpackBootstrap
  /**\*\***/ "use strict";
  /**\*\***/ var **webpack_modules** = ({

/**_/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/index.less":
/_!**************************************************\*\*\*\*****************************************************!\*\
 !**_ ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/index.less _**! \*****************************************************\*****************************************************/
/\*\*\*/ ((module, **webpack_exports**, **webpack_require**) => {

eval("**webpack_require**.r(**webpack_exports**);\n/_ harmony export _/ **webpack_require**.d(**webpack_exports**, {\n/_ harmony export _/ \"default\": () => (**WEBPACK_DEFAULT_EXPORT**)\n/_ harmony export _/ });\n/_ harmony import _/ var \_node_modules_css_loader_dist_runtime_noSourceMaps_js**WEBPACK_IMPORTED_MODULE_0** = **webpack_require**(/_! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js _/ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/_ harmony import _/ var \_node_modules_css_loader_dist_runtime_noSourceMaps_js**WEBPACK*IMPORTED_MODULE_0***default = /_#**PURE**_/**webpack_require**.n(\_node_modules_css_loader_dist_runtime_noSourceMaps_js**WEBPACK_IMPORTED_MODULE_0**);\n/_ harmony import _/ var \_node_modules_css_loader_dist_runtime_api_js**WEBPACK_IMPORTED_MODULE_1** = **webpack_require**(/_! ../../node_modules/css-loader/dist/runtime/api.js _/ \"./node_modules/css-loader/dist/runtime/api.js\");\n/_ harmony import _/ var \_node_modules_css_loader_dist_runtime_api_js**WEBPACK*IMPORTED_MODULE_1***default = /_#**PURE**_/**webpack_require**.n(\_node_modules_css_loader_dist_runtime_api_js**WEBPACK_IMPORTED_MODULE_1**);\n// Imports\n\n\nvar **_CSS_LOADER_EXPORT_** = \_node_modules_css_loader_dist_runtime_api_js**WEBPACK*IMPORTED_MODULE_1***default()((\_node_modules_css_loader_dist_runtime_noSourceMaps_js**WEBPACK*IMPORTED_MODULE_0***default()));\n// Module\n**_CSS_LOADER_EXPORT_**.push([module.id, \".box2 {\\n width: 100px;\\n height: 100px;\\n background-color: deeppink;\\n}\\n\", \"\"]);\n// Exports\n/_ harmony default export _/ const **WEBPACK_DEFAULT_EXPORT** = (**_CSS_LOADER_EXPORT_**);\n\n\n//# sourceURL=webpack://webpack5/./src/less/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/\*\*\*/ }),
// 其他省略
```

所有 css 和 js 合并成了一个文件，并且多了其他代码。此时如果代码运行出错那么提示代码错误位置我们是看不懂的。一旦将来开发代码文件很多，那么很难去发现错误出现在哪里。

所以我们需要更加准确的错误提示，来帮助我们更好的开发代码。

## 是什么

`SourceMap`（源代码映射）是一个用来生成源代码与构建后代码一一映射的文件的方案。

它会生成一个 xxx.map 文件，里面包含源代码和构建后代码每一行、每一列的映射关系。当构建后代码出错了，会通过 xxx.map 文件，从构建后代码出错位置找到映射后源代码出错位置，从而让浏览器提示源代码文件出错位置，帮助我们更快的找到错误根源。

## 怎么用

通过查看 [Webpack DevTool 文档](https://webpack.docschina.org/configuration/devtool/)可知，SourceMap 的值有很多种情况.

但实际开发时我们只需要关注两种情况即可：

- 开发模式：`cheap-module-source-map`

> 优点：打包编译速度快，只包含行映射

> 缺点：没有列映射

```js
module.exports = {
  // 其他省略
  mode: 'development',
  devtool: 'cheap-module-source-map'
}
```

- 生产模式：source-map
  > 优点：包含行/列映射

> 缺点：打包编译速度更慢

```js
module.exports = {
  // 其他省略
  mode: 'production',
  devtool: 'source-map'
}
```
