# List 常用属性和方法

## 常用属性

### length

通过`length`来获取 List 的长度

```dart
List list = [1,2,3,4,5];
print(list.length); // 5
```

### reversed

通过`reversed`将 List 翻转

```dart
List list = [1,2,3,4,5];
print(list.reversed); // (1,2,3,4,5)
```

### isEmpty & isNotEmpty

可以通过`isEmpty`和`isNotEmpty`来判断 List 是否为空

```dart
List list = [1,2,3,4,5];
print(list.isEmpty); // false
print(list.isNotEmpty); // true
```

## 常用方法

### add

通过`add`向 List 中增加一个元素

```dart
List list = <String>['香蕉', '菠萝', '苹果'];
list.add('西瓜');
```

### addAll

向 List 中添加多个元素(拼接 List)

```dart
List list = <String>['香蕉', '菠萝', '苹果'];
list.addAll(<String>['哈密瓜', '葡萄']);
```

### indexOf

在 List 中查找,传入的为具体的值,若查到相应的值,则返回对应值的索引,否则返回`-1`

```dart
List list = <String>['香蕉', '菠萝', '苹果'];
print(list.indexOf('苹果'))
```

### remove

删除 List 中的元素,传入的为具体的值

```dart
List list = <String>['香蕉', '菠萝', '苹果'];
list.remove('苹果');
```

### removeAt

删除 List 中的元素,传入的为索引值

```dart
List list = <String>['香蕉', '菠萝', '苹果'];
list.removeAt(1);
```

### fillRange

修改 List 中的元素,三个参数分别为: 起始索引,结束索引,要修改的值

```dart
List list = <String>['香蕉', '菠萝', '苹果'];
list.fillRange(0, 1, 'aaa');
```

### insert

通过`insert(index, value)`向 List 中的指定位置插入元素,`index`为索引,`value`为要插入的值

```dart
List list = <String>['香蕉', '菠萝', '苹果'];
list.insert(1, '西瓜');
```

### insertAll

通过`insertAll(index, List)`向 List 中的指定位置插入 List

```dart
List list = <String>['香蕉', '菠萝', '苹果'];
list.insertAll(1, <String>['西瓜', '葡萄']);
```

### toList

通过`toList`将其他类型转换成 List

```dart
List list = [1,2,3,4,5];
print(list.reversed.toList()); // [5,4,3,2,1]
```

### join

将 List 转换成字符串

```dart
List list = [1,2,3,4,5];
print(list.join(','));
```

### split

将字符串转换成 List

```dart
String str = 'a-b-c';
print(str.split('-'));
```
