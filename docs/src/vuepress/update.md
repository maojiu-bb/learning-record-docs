# 更新网站内容

> VuePress 每次打包生成的 dist 都不相同，因此尽量有比较大改动时才更新网站，这不像 docsify 那么方便自由

- 本地拷贝一份 `.git` 文件夹备用，删除旧的 `dist` 文件夹
- 重新打包生成新的 `dist` 文件夹
- 把备用 `.git` 文件夹拷贝到新的 `dist` 文件夹中
- 将修改添加暂存区，提交本地库，并推送到远程分支
- 如此，既能更新远程 `pages` 分支内容，也能同步 `git` 的历史操作记录