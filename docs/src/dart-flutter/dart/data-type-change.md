# 数据类型转换

## String to Number

通过`int.parse()`或`double.parse()`来转换

```dart
String str1 = '123';
String str2 = '';
// 使用 try ... catch 捕获异常
try {
    var num1 = int.parse(str1);
    var num2 = double.parse(str2);
    print('num1:$num1');
    print(num2);
} catch (e) {
    print('Error:num2');
}
```

## Number to String

通过 `toString()` 方法转换

```dart
int a = 10;
String b = a.toString();
print(b);
```

## 其他类型转换成 bool

```dart
//isEmpty: 判断字符串是否为空
String str = '';
if (str.isEmpty) {
print('str is empty');
}
```
