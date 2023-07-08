# 基本操作

## 启动服务

```bash
#fork 后台运行  若要使用账号密码服务 需要在启动时加 --auth
mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork
#不在后端运行，可以在控制台上查看运行过程，使用配置文件启动
mongod --config /usr/local/etc/mongod.conf

# 关闭方法db.shutdownServer()  之后exit
# 需要账号密码的登陆方式：
# 方法一：
mongo 服务器IP地址：mongo 127.0.0.1/admin -u admin -p 123456
# 方法二：
# mongo进入shell
use admin
db.auth('admin','123456') 返回1则验证成功
```

## 查看服务信息

```bash
ps aux | grep -v grep | grep mongod
```

## 查看数据库

```bash
show databses
```

## 选择数据库

```bash
use database[数据库名称] # 选择不存在的数据库会隐式创建该数据库
```

## 删除数据库

先选择到要删除的数据库

```bash
db.dropDatabase
```

## 查看集合

```bash
show collections
```

## 创建集合

```bash
db.createCollection('c1')
```

## 删除集合

```bash
db.集合名.drop()
```

## ID 的组成：

0 1 2 3 4 5 6 7 8 9 10 11

0-3:时间戳 4-6：机器 mac 码 7-8:PID 9-11:计数器

也可以自定义 ID，只需要给插入的 JSON 数据增加\_id 键即可覆盖（强烈不推荐）
