# try catch

当一次性插入或者更新 n 条数据时，mongodb 不会因为一条数据的错误而使得整个操作终止并回滚，只会终止接下来的操作，所以可以使用 trycatch 来进行异常的捕捉处理。测试的时候可以不处理。

例如：

```bash
try{
  db.c1.insertMany([
  {"_id":1,name:"xzy"},
  {"_id":2,name:"lhl"},
	{"_id":3,name:"yzh"},
	{"_id":4,name:"lwy"}...
}
  ])
}catch(e){
	print
}
```
