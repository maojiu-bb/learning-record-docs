# 远程仓库交互

## git remote

- 查看所有远程仓库地址别名

```bash
git remote -v
```

- 为远程仓库起别名

```bash
git remote add 别名 地址
```

- 删除远程仓库别名

```bash
git remote remove 别名
```

- 修改别名

```bash
git remote rename 旧名 新名
```

## git clone

- 克隆远程仓库到本地

```bash
git clone 地址
```

- 克隆远程仓库指定分支到本地

```bash
git clone -b 远程仓库分支名 地址
```

## git pull

- 拉取远程分支，并与本地分支合并

```bash
git pull 别名 分支名
```

## git push

- 推送本地指定分支到仓库指定分支

```bash
git push 别名 本地分支:远程分支
```

- 如果远程分支被省略，表示将本地分支推送到与之存在追踪关系的远程分支（通常两者同名），如果该远程分支不存在，则会被新建

```bash
git push origin master
```

- 如果省略本地分支名，等同于推送一个空的本地分支到远程分支，表示删除指定的远程分支，等同于

```bash
git push origin :master
# 等同于
git push origin --delete master
```

- 强制推送

```bash
git push --force origin master
```

- 直接使用仓库地址推送，无需起别名

```bash
git push git@github.com:<USERNAME>/<REPO>.git master:main
```
