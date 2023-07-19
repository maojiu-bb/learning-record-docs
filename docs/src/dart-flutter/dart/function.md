# 函数

## 基本函数

```dart
void main(List<String> args) {
  printStr()
}
void printStr() {
  print('print str');
}
```

## 函数传参

形参类型应与实参类型对应

```dart
void main(List<String> args) {
  var res = listFunc(6);
  print(res);
}

List listFunc(int n) {
  var list = List<int>.filled(n, 6);
  return list;
}
```

## 可选参数

将可选参数用`[]`进行包裹

```dart
void main(List<String> args) {
  var res = strFunc('maojiu', 18);
  print(res);
}

String strFunc(String name, [int? age, String? sex]) {
  return 'name: ${name}----age: ${age}----sex:${sex}';
}
```

## 默认参数

在定义形参的时候进行赋默认值

```dart
void main(List<String> args) {
  var res = defaultFunc('maojiu');
  print(res);
}

String defaultFunc(String name, [int age = 18, String sex = '男']) {
  return 'name: ${name}----age: ${age}----sex:${sex}';
}
```

## 命名参数

用`{}`进行包裹的参数为命名参数

```dart
void main(List<String> args) {
  var res = namedFunc('maojiu', sex: '男');
  print(res);
}

String namedFunc(String name, {int age = 18, String? sex}) {
  return 'name: ${name}----age: ${age}----sex:${sex}';
}
```

## 函数作为参数

```dart
void main(List<String> args) {
  fn1(fn2);
}

void fn1(fn) {
  fn();
}
void fn2() {
  print('ok');
}
```

## 匿名函数

```dart
void main(List<String> args) {
  var fn = (int n) {
    print(n);
  };
  fn(6);
}
```

## 自执行函数

使用`(() {...})()`的为自执行函数,无需调用

```dart
void main(List<String> args) {
  ((int n) {
    print(n);
  })(6);
}
```
