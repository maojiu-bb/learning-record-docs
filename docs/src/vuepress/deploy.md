# 部署

1.在 `docs/.vuepress/config.js` 中设置正确的 `base`。
若发布到 `https://<USERNAME>.gitee.io/` ，可省略此步，因为 `base` 默认为 `"/"` 。

若发布到 `https://<USERNAME>.gitee.io/<REPO>/` ，`<REPO>` 为仓库名，则将 `base` 设置为 `"/<REPO>/"` 。

```js
module.exports = {
  // 仓库名为 bruceblog
  base: '/bruceblog/'
}
```

2.在 `bruceblog` 目录下运行打包命令

```bash
npm run build
```

3.打包完成后，会生成 `dist` 文件夹，进入该文件夹

```bash
cd docs/.vuepress/dist
```

4.初始化 git，并添加暂存区，提交本地库

```bash
git init
git add -A
git commit -m 'init bruceblog' -a
```

5.为远程仓库起别名

```bash
git remote add origin 远程仓库地址
```

6.拉取远程仓库分支，与本地分支合并
额外创建一个分支，`master` 分支保存原始的 markdown 文档，`pages`分支则用于上传打包后的文件，并使用 `pages` 分支部署 Gitee Pages。

```bash
git pull origin pages
```

7.推送本地分支到远程分支

```bash
git push origin master:pages
```

8.选择部署分支，并开启 Gitee Pages 服务

至此，搭建大功告成！🎉😄
