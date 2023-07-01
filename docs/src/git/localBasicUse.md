# 本地基本操作

## 初始化本地库

```bash
git init
```

## 查看状态

```bash
git status
```

## 添加暂存区 git add

- 将当前目录及其子目录下所有变更添加到暂存区

```bash
git add .
```

- 将本地库所有变更添加到暂存区

```bash
git add -A
```

- 指定文件添加暂存区

```bash
git add file1 file2 ...
```

## 提交本地库 git commit

- 提交所有变更

```bash
git commit
# or
git commit -m '日志信息' -a
```

- 提交当前目录及其子目录的变更

```bash
git commit -m '日志信息' .
```

- 提交指定文件

```bash
git commit -m '日志信息' fileName
```
