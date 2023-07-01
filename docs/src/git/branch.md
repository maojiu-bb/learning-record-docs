# 分支命令

## 创建分支

- 基于当前分支创建分支

```bash
git branch 新分支
```

- 基于指定分支创建分支

```bash
git branch 新分支 已有分支
```

- 基于某个 commit 创建分支

```bash
git branch 新分支 commitID
```

- 基于当前分支创建分支并切换到新分支

```bash
git checkout -b 新分支
```

- 基于远程分支创建新分支

```bash
git checkout -b 新分支 别名/远程分支名
git checkout -b test_2023 origin/test_2023
```

## 查看本地分支

```bash
git branch -v
```

## 删除分支

- 安全删除本地分支

```bash
git branch -d 分支
```

- 强制删除本地分支

```bash
git branch -D 分支
```

## 切换分支

```bash
git checkout 分支名
```

## 合并分支

### 合并本地分支

`merge` 和 `rebase`的区别有待学习实践 😟

- 将 A 分支合并到当前分支，且为 merge 创建 commit

```bash
git merge A
```

- 将 A 分支合并到 B 分支，且为 merge 创建 commit

```bash
git merge A B
```

- 把当前分⽀基于 B 分⽀做 rebase，以便把 B 分⽀合⼊到当前分⽀

```bash
git rebase B
```

- 把 A 分⽀基于 B 分⽀做 rebase，以便把 B 分⽀合⼊到 A 分⽀

```bash
git rebase B A
```

### 合并远程仓库分支

- 将远程指定分支与本地当前分支合并。可用于在合并到团队公共分支之前解决冲突问题，在本地合并公共分支先解决掉冲突。

```bash
git merge --no-ff origin/develop_2023-03-12
```
