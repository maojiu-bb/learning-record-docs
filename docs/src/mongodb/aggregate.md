# 聚合查询

## 语法：

```bash
db.集合名称.aggregate([
	{管道:{表达式}}
	....
])
```

## 常用管道：

- $group 将集合中的文档分组，用于统计结果
- $match 过滤数据，只要输出符合条件的文档
- $sort 聚合数据进一步排序
- $skip 跳过指定文档数
- $limit 限制集合数据返回文档数
- ....

## 常用表达式：

- $sum 总和 $sum:1 同 count 表示统计
- $avg 平均
- $min 最小值
- $max 最大值

准备：

```bash
db.c3.insert({_id:1,name:"a",sex:1,age:1})
db.c3.insert({_id:2,name:"a",sex:1,age:2})
db.c3.insert({_id:3,name:"b",sex:1,age:3})
db.c3.insert({_id:4,name:"c",sex:2,age:4})
db.c3.insert({_id:5,name:"d",sex:2,age:5})
```

操作：

男女生的总年龄

#\_id 必须加，后跟指定列

#rew 求和 返回结果数

```bash
db.c3.aggregate([
	{
		$group:{
			_id:"$sex",
			res:{$sum:"$sex"}
	}
	}
])
```

求男女总人数

```bash
db.c3.aggregate([
	{
		$group:{
			_id:"$sex",
			res:{$sum:1}
	}
	}
])
```

求学生总数和平均年龄

```bash
db.c3.aggregate([
	{
		$group:{
			_id:null,
			res:{$sum:1},
      total_avg:{$avg:"$age"}
	}
	}
])
```

查询男生女生人数，升序排序

```bash
db.c3.aggregate([
	{$group:{	_id:"$sex",res:{$sum:1}}},
	{$sort:{res:1}}
])
```
