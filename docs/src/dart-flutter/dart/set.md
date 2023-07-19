# Set 集合

## 基本使用

```dart
var s = new Set();
s.add('a');
print(s); // {a}
```

## 实现数组去重

```dart
List list = <int>[1, 2, 3, 4, 5, 4, 3, 2, 1];
var s = new Set();
s.addAll(list);
s.toList();
print(s.toList());
```
