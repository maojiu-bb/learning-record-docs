# List 和 Map

## List

List 数据类型就类式与 JavaScript 中的数组

### 创建 List

1.直接创建

```dart
var list = [];
list.add(1);
print(list);
// or
List list2 = []
list2.add(1);
print(list2);
```

2.声明类型

```dart
var list = <String>['1', '2'];
list[1] = '0';
print(list2);
```

3.创建固定长度

```dart
var list = List<int>.filled(3, 6);
print(list3);
```

## Map

Map 数据类型是一个字典集，类似于 JavaScript 中的 json

### 创建 Map

1.直接创建

```dart
var personMap = {
      "name": "John",
      "age": 18,
      "work": ["程序猿", "外卖员"]
  };

print(personMap['name']);
print(personMap['age']);
```

2.通过 new 关键字

```dart
var map = new Map();

map['name'] = "Maojiu";
```

## 判断数据类型 is

可以通过`is`关键字来判断数据类型

```dart
var a = 'string';

print(a is String);  // true
```
