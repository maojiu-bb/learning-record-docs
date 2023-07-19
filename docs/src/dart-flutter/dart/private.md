# 私有属性

与 Java 等语言不同,Dart 中的私有属性通过 `_` 来定义,并且必须在不同的文件当中

- main.dart

```dart
import 'lib/Animal.dart';

void main(List<String> args) {
  Animal am = new Animal('dog', 3);
  print(am.age);
  print(am.getName());
}
```

- Animal.dart

```dart
// 私有属性只能存在于一个单独的文件当中

class Animal {
  String _name; // 使用 _ 来定义私有属性
  int age;

  Animal(this._name, this.age);

  String getName() {
    return this._name;
  }
}
```
