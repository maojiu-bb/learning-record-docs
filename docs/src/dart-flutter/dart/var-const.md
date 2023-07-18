# 变量与常量

## 变量

- `var`

可以通过 `var` 关键字来声明一个变量，可以整型、字符串类型、布尔类型等

```dart
var str = 'string';
var myNum = 123;
var flag = true;
```

- `String`

通过 `String` 关键字来声明字符串变量

```dart
String str = '123';
```

- `int`

通过 `int` 关键字来声明整型变量

```dart
int a = 10;
```

- `double`

通过 `double` 关键字来声明浮点型变量

```dart
double d = 3.14;
```

- `bool`

通过 `bool` 关键字来声明布尔型变量

```dart
bool flag = false;
```

## 常量

- `const`

这与 JavaScript 中的类式，通过`const`关键字来声明常量

```dart
const a = 10;
```

- `final`

```dart
final date = new DateTime.now();
```

通过 `final`关键字也可以声明常量

与`const`的区别：

> 1. `const` 是编译时常量，在定义时就需要初始化，并且其值必须是在编译期间就可以确定的。
> 2. `final` 是运行时常量，在定义时可以不初始化，但一旦初始化后就无法再修改其值。
