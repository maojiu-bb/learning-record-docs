# 类和对象

## 基本类

```dart
void main(List<String> args) {
  Person p = new Person();
  print(p.name);
  print(p.getInfo());
}

class Person {
  String name = '张三';
  int age = 18;

  String getInfo() {
    return '${this.name}---${this.age}';
  }

  void setInfo(String name, int age) {
    this.name = name;
    this.age = age;
  }
}
```

## 默认构造函数

> 在其他语言中,如 Java TS 中的默认构造函数写为 `construct` ,但是在 Dart 中默认构造函数与类名一致

```dart
class Maojiu {
  String name;
  int age;
// 默认构造函数
  Maojiu(this.name, this.age) {
    print('默认构造函数');
  }
  String getInfo() => '${this.name}---${this.age}';
}
```

## 命名构造函数

```dart
class Soial {
  String? name;
  int? age;
  Soial(this.name, this.age);

  // 命名构造函数
  Soial.set(String name, int age) : this(name, age);
  Soial.now() {
    print('${this.name}---${this.age}');
  }

  String getInfo() => '${this.name}---${this.age}';
}
```
