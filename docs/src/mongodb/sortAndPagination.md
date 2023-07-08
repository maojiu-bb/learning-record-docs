# 排序&分页

准备：

```bash
use test
db.c2.insert({_id:1,name:"a",sex:1,age:1})
db.c2.insert({_id:2,name:"b",sex:2,age:2})
db.c2.insert({_id:3,name:"c",sex:3,age:3})
db.c2.insert({_id:4,name:"d",sex:4,age:4})
db.c2.insert({_id:5,name:"e",sex:5,age:5})
```

## 排序

语法：

```bash
db.集合名.find().sort(JSON数据)
```

说明：键-就是要排序的列/字段，值：1 升序 -1 降序

使用：对年龄进行降序排序

```bash
db.c2.find().sort({age:-1})
```

## 分页

语法：

```bash
db.集合名.find().skip(数字).limit(数字)
```

说明：skip 里的数字指跳过指定数量（可选），limit 限制查询的数量

```bash
db.c2.find().sort({age:-1}).skip(1).limit(2)
```
