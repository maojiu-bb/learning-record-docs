# 创建 Vue3 工程

## vite 和 vue-cli 对比

|                        |     vite      |     vue-cli     |
| :--------------------: | :-----------: | :-------------: |
|    支持的 vue 版本     | 仅支持 vue3.x | 支持 2.x 和 3.x |
|    是否基于 webpack    |      否       |       是        |
|        运行速度        |      快       |      较慢       |
|       功能完整度       |    小而巧     |     大而全      |
| 是否建议企业级开发使用 |   暂不建议    |      建议       |

## 使用 vue-cli 创建

```shell
### 查看 @vue/cli 版本，确保 @vue/cli 版本在4.5.0以上
vue --version
### 安装或者升级 @vue/cli
npm install -g @vue/cli
### 创建
vue create vue_test
### 启动
cd vue_test
npm run serve
```

## 使用 vite 创建

- [vite](https://vitejs.cn/)：新一代前端构建工具
- 优势：
  - 开发环境中，无需打包操作，可快速冷启动（webpack 每次运行项目都要打包）
  - 轻量快速的热重载 HMR（更改代码局部刷新，webpack 也行，但 vite 更轻量）
  - 真正的按需编译，无需等待整个应用编译完成
- 传统构建 与 vite 构建对比（vite 现用现分析，按需导入，因此项目启动更快）

![bundle](/image/bundle.png)

![ESM](/image/ESM.png)

```shell
npm init vite-app 项目名称

cd 项目名称
npm install
npm run dev
```
