# 账户配置

1.配置全局账户，对所有 Git 仓库有效

```bash
git config --global user.name 'Your Name'
git config --global user.email 'Your Email'
```

2.配置局部账户，只对当前 Git 仓库有效

```bash
git config --local user.name 'Your Name'
git config --local user.email 'Your Email'
```

3.查看全局配置

```bash
git config --global --list
```

4.查看局部配置

```bash
git config --local --list
```
