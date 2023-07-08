# 备份还原

语法：

```bash
在终端中执行，该命令不是mongo命令
导出：mongodump -h -port -u -p -d -o
导出语法说明
-h host 服务器IP地址（一般不写 默认本机）
-port port 端口（不写默认27017）
-u user 用户
-p pwd 密码
-d database 数据库（不写默认导出全部）
-o open 备份到指定目录下

mongodump -u admin -p 123456 -o /Users/didi/xzy文件/mongo
#注意 最新的mongodb版本4.4中，是没有mongodump工具的，需要通过使用brew命令单独下载
#brew install mongodb-database-tools

单独备份一个指定数据库：
mongodump -u shop2 -p 123456 -d shop -o /Users/didi/xzy文件/mongo
#此时好像不能使用admin作为用户来备份，可能是因为这个不是创建在shop中的用户？
```
