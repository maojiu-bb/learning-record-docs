# 增删改查

## C 增

```bash
db.集合名.insert(JSON数据)
```

集合存在，则直接插入数据，集合不存在，隐式创建并插入

```bash
use test2
db.c1.insert({username:"xzy",age:18})
db.c1.insertMany({})
# 留心一：数据库和集合不存在时，都隐式创建
# 留心二：对象的键同意不加引号方便看，但是查看集合数据时系统会自动加上
# 留心三：mongodn会给每条数据添加一个全球唯一的ID

# 插入多条数据：
# 传递数组，数组中每个元素都是一个JSON类型
db.c1.insert([
  {username:"z3",age:3},
  {username:"z4",age:4},
  {username:"z5",age:5}
])

# 插入N条数据：
# mongodb底层使用JS引擎实现的，所以支持部分js语法，可以使用for循环
for(var i=1;i<=10;i++){
  print(i)
}

# 插入十条数据：

for(var i=1;i<=10;i++){
  db.c1.insert({username:"a"+i,age:i})
}
```

## R 查

语法：

```bash
db.集合名.find(条件，[查询的列])
```

格式化：

```bash
db.集合名.find().pretty()
```

```bash
条件：
	查询所有数据  				{}或者不写
	查询age=6的数据 			 {age:6}
	查询age=6且性别为男   {age:6,sex:'男'}

查询的列
	不写 - 查询全部的列
	{age:1} 只显示age列，可以显示多个想要的列{user:1,age:1.......}
	{age:0} 除了age列外都显示 可以不显示多个想要的列{user:0,age:0}
	无论怎么写系统自定义_id都会在
```

升级语法：

```bash
db.集合名.find(键：值)  注：值不直接写

							{运算符：值}

db.集合名.find({

	键：{运算符：值}

})


例如：
年龄小于5的
db.c1.find({age:{$lt:5}})

年龄等于3、4、5的
db.c1.find({age:{$in:[3,4,5]}})
```

运算符表：

| 运算符 |   作用   |
| :----: | :------: |
|  $gt   |   大于   |
|  $gte  | 大于等于 |
|  $lt   |   小于   |
|  $lte  | 小于等于 |
|  $ne   |  不等于  |
|  $in   |    in    |
|  $nin  |  Not in  |

## U 改

基础语法：

```bash
db.集合名.update（条件，新数据[,是否新增，是否修改多条]）
```

- 是否新增：指条件匹配不到数据则插入，true 是插入，false 否不插入默认
- 是否修改多条：指将匹配成功的数据都修改（true 是，false 否默认）

```bash
for(var i=1;i<=10;i++){
	db.c3.insert({username:"zs"+i,age:i});
}

db.c3.update({username:"zs1"},{username:"zs2"}) # 这样是替换，将符合条件的行直接换成这个
```

升级语法：

```bash
db.c3.update（{username:"zs2"}，{$set:{username:"zs222"}}）

# 给zs10 增加2岁
db.c3.update({username:"zs10"},{$inc:{age:2}})
# 给zs10 减少2岁
db.c3.update({username:"zs10"},{$inc:{age:-2}})

# 准备：插入一个数据：
db.c4.insert({username:"熊子阳",age:18,who:"男",other:"没钱"})

# 修改数据，将 熊子阳 改为 Aoi  ，age 改为999 ，who 改为 sex ，other 删除
db.c4.update({username:"熊子阳"},
{$set:{username:"Aoi"}},
{$inc:{age:971}},
{$rename:{who:sex}},
{$unset:{other:true}})

正确写法：
db.c4.update({username:"熊子阳"},{
	$set:{username:"Aoi"},
	$inc:{age:971},
	$rename:{who:"sex"},
	$unset:{other:true}
})

#更新不存在的值,若不存在则不会有操作
db.c3.update({username:"zs30"},{$set:{age:30}})
#在最后加一个true参数，作用是，如果不存在，则插入该条数据,默认为false则不管
db.c3.update({username:"zs30"},{$set:{age:30}},true)

#第四个参数如果为true，当匹配到多条条件符合的元素时，都更改，默认为false，只改一条
db.c3.update({},{$set:{age:20}},false,true)
```

| 运算符  |   作用   |
| :-----: | :------: |
|  $inc​  |   递增   |
| $rename | 重命名列 |
|  $set   | 修改列值 |
| $unset  |  删除列  |

## D 删

语法：

```bash
db.集合名.remove(条件[,是否删除一条])
```

- 是否删除一条 true 是，false 否 默认

- 当存在多条符合条件的行时，只删除一条

```bash
db.c3.remove({username:"zs30"},true)
# 存在多条时，全部删除
db.c3.remove({username:"zs30"},true)
```
