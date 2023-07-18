# 运算符与条件判断

## 运算符

### 算数运算符

```dart
int a = 10;
int b = 20;

print(a + b); // 加
print(a - b); // 减
print(a * b); // 乘
print(a / b); // 除
print(a ~/ b); // 取整
print(a % b); // 取余
```

### 关系运算符

> `> < == >= <= !=`

```dart
int a = 10;
int b = 20;

print(a > b); // false
```

### 逻辑运算符

> `！ && ||`

```dart
bool flag = false;

print(!flag); // true
```

### 赋值运算符

> 1. 基础赋值运算：`=` `??=`(如过问好前面的值为空，则把等号后面的值赋值给它)
> 2. 复合赋值运算：`+= -+ \*= /= %= ~/=`

### 三目运算符

> `a > b ? 'a': 'b'`

```dart
int a = 10;
a > 100 ? true : false
```

### ?? 运算符

> 当 ?? 前面的值为空时则取 ?? 后面的饿值

```dart
var m;
var n = m ?? 10;
print(n);
```

## 条件判断

### `if else`

```dart
bool flag = true;
if (flag) {
  print('true');
} else {
  print('false');
}
```

### `switch case`

```dart
switch (number) {
  case 1:
    print('1');
    break;
  case 2:
    print('2');
    break;
  default:
    print('unknown');
}
```
