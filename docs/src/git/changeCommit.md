# 修改 commit 记录

- 往最后一次 commit 追加记录，而不新建 commit - [reference](https://segmentfault.com/a/1190000038535534)

```bash
git commit --amend
```

- 合并 commit 记录 - [reference](https://www.jianshu.com/p/4a8f4af4e803)

```bash
git rebase -i HEAD~2
```
