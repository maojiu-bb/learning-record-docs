# 优化索引

## 基本操作

创建索引语法：

```bash
db.集合名.createIndex(待创建索引的列[,额外选项])
```

参数：

> 待创建索引的列:`{键:1,...,键:-1}`

> 说明：1 升序 -1 降序 列入`{age：1`}表示创建 `age` 索引并按照升序的方式存储

> 额外选项：设置索引的名称或者唯一索引等等

```bash
#创建只对单个列为条件的索引
db.c1.create({name:1})
#创建一个自己取名的索引
db.c1.create({name:1},{name:"xzy"})
#创建条件为多个列的组合索引
db.c1.create({name:1,age:-1},{"hh"})

#创建唯一索引
db.c1.createIndex({name:1},{unique:"name"})
```

删除索引语法：

> 全部删除：`db.集合名.dropIndexes()`

> 删除指定：`db.集合名.dropIndex(索引名)`

查看索引语法：

```bash
db.集合名.getIndexes()
```

## 分析索引

语法：

```bash
db.集合名.find().explain('executionStats')
```

说明：

COLLSCAN 全表扫描

IXSCAN 索引扫描

FETCH 根据索引去检索指定 document
