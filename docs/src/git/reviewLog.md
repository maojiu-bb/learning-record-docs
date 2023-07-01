# 查看日志信息 git log

1.查看简要日志信息

```bash
git reflog
```

2.查看详细日志信息

```bash
git log
```

3.查看极简日志信息

```bash
git log --oneline
```

4.查看最近 n 次的版本信息

```bash
git log -n
```

5.查看所有分支的版本历史

```bash
git log --all
```

6.以图形形式展示版本历史

```bash
git log --graph
```

7.查看涉及到指定文件的 commit 记录

```bash
git log fileName
```

8.查看指定文件每一行修改对应的 commit 记录和作者

```bash
git blame fileName
```
