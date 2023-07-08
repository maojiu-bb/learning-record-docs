# 权限机制

**开启验证模式概念：**指用户需要输入账号密码才能登陆使用

## 操作步骤：

1、添加超级管理员

2、退出卸载服务

3、重新安装需要输入账号密码的服务（注在原安装命令基础上加上--auth 即可）

4、启动服务-〉登陆测试

## 步骤一：添加超级管理员

```bash
use admin
db.createUser({
              "user":"admin",
              "pwd":"123456",
             	"roles":[{
                       role:"root",
                       db:"admin"
                       }]
              })
```

查看管理员

```bash
use admin
show collections
db.system.users.find().pretty()
```

## 步骤二：退出卸载服务

- 关闭方法: `db.shutdownServer()`
- 之后`exit`

## 步骤三：安装需要验证的 MongoDB 服务

```bash
#使用--auth参数来开启认证服务
mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --auth --fork

#或在config文件中添加上
security:
	#开启授权认证后再用配置文件来启动即可
	authorization:enabled

# 需要账号密码的登陆方式：
# 方法一：
mongo 服务器IP地址：mongo 127.0.0.1/admin -u admin -p 123456
# 方法二：
mongo进入shell
use admin
db.auth('admin','123456') # 返回1则验证成功
```

例子：

```bash
for(var i = 1;i<=10;i++){
db.goods.insert({"name":"goodsName"+i,"price":i})
}
# 添加用户shop1可以读shop数据库
db.createUser({
              "user":"shop1",
              "pwd":"123456",
             	"roles":[{
                       role:"read",
                       db:"shop"
                       }]
              })

# 添加用户shop2可以读写shop数据库
db.createUser({
              "user":"shop2",
              "pwd":"123456",
             	"roles":[{
                       role:"readWrite",
                       db:"shop"
                       }]
              })
```
