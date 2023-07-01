# 比较差异 git diff

1.比较工作区和暂存区的所有差异，只能查看旧文件的变更（包括修改和删除），不能查看新文件（因为新文件还为被 git 追踪）

```bash
git diff
```

2.比较指定文件工作区和暂存区的差异

```bash
git diff fileName
```

3.比较暂存区和 HEAD 的所有差异

```bash
git diff --cached
```

4.比较指定文件暂存区和 HEAD 的差异

```bash
git diff --cached fileName
```

5.比较两个版本的差异

- 以前者为基准看后者的变化
- HEAD 表示最后一次 commit 对应的版本，HEAD~1 往前一个版本

```bash
git diff 版本号1 版本号2
```

```bash
git diff HEAD~1 HEAD
git diff HEAD~2 HEAD
```

6.比较两个分支指定文件的差异

```bash
git diff 分支1 分支2 fileName
```
