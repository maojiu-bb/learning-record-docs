# 常用的遍历方法

## List

### forEach

```dart
List list = ['吃饭', '睡觉', '敲代码'];

list.forEach((element) {
  print(element);
});
```

### map

```dart
List list2 = [1, 2, 3];
var newList = list2.map((e) => e * 2);
print(newList.toList());
```

### where

```dart
List list = [1, 2, 3, 5, 7, 9];
var newList = list.where((element) => element > 5);  // 只返回满足要求的(过滤)
print(newList.toList());
```

### any

```dart
List list = [1, 2, 3, 5, 7, 8];
var res = list.any((element) => element > 5); // 只有有一个满足就返回true
print(res);
```

### every

```dart
List list = [1, 2, 3, 4, 5, 7, 8];
var newList = list.every((element) => element > 5); // 只有全部满足才返回true
print(newList);
```

## Set

```dart
var s = new Set();
s.addAll([1, 2, 3, 4, 5]);
s.forEach((element) => print(element));
```

## Map

```dart
var p = {"name": "Maojiu", "age": 18, "sex": "男"};
p.forEach((key, value) {
  print('${key}---${value}');
});
```
