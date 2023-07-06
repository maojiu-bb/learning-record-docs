# 体验 VuePress

1.创建并进入新目录

```bash
mkdir maojiublog
cd maojiublog
```

2.初始化 npm

```bash
npm init
#
yarn init
```

3.安装 VuePress

```bash
npm install -D vuepress
#
yarn add -D vuepress
```

4.在根目录下创建 docs 文件夹

```bash
mkdir docs
```

5.在 docs 目录下新建 index.md 文档，并写入一些内容

6.在 `package.json` 文件添加 `scripts`

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

7.启动本地服务器

```bash
npm run dev
#
yarn dev
```

8.浏览器打开服务器所给地址
