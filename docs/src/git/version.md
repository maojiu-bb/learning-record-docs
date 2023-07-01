# 版本穿梭与回滚

1.工作区指定文件恢复成和暂存区一样

```bash
git checkout file1 file2 ...

# tips in the Git Bash
# use "git restore <file>..." to discard changes in working directory
git restore file1 file2 ...
```

2.暂存区指定文件恢复成和 HEAD 一样

```bash
git reset file1 file2 ...

# tips in the Git Bash
# use "git restore --staged <file>..." to unstage
git restore --staged file1 file2 ...
```

3.工作区和暂存区所有文件恢复成和 HEAD 一样

```bash
git reset --hard
```

4.工作区和暂存区所有文件恢复成和指定版本一样

```bash
git reset --hard 版本号
```
