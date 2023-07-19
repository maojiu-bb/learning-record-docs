# 接口

> 和 Java 一样，dart 也有接口，但是和 Java 还是有区别的。

> 首先，dart 的接口没有 interface 关键字定义接口，而是普通类或抽象类都可以作为接口被实现。

> 同样使用 implements 关键字进行实现。T

> 但是 dart 的接口有点奇怪，如果实现的类是普通类，会将普通类和抽象中的属性的方法全部需要覆写一遍。

> 而因为抽象类可以定义抽象方法，普通类不可以，所以一般如果要实现像 Java 接口那样的方式，一般会使用抽象类。

> 建议使用抽象类定义接口。

## 抽象类接口

```dart
void main(List<String> args) {
  Dog d = new Dog();
  print(d.name);
  d.run();

  Cat c = new Cat();
  print(c.age);
  c.eat();
}

// 抽象类接口
abstract class Animal {
  late String name;
  late int age;
  eat();
  run();
}

// 通过 implements 实现接口
class Dog implements Animal {
  @override
  int age = 10;

  @override
  String name = "Dog";

  @override
  eat() {
    // TODO: implement eat
    print('dog eat');
  }

  @override
  run() {
    // TODO: implement run
    print('dog run');
  }
}

class Cat implements Animal {
  @override
  int age = 8;

  @override
  String name = "cat";

  @override
  eat() {
    // TODO: implement eat
    print('cat eat');
  }

  @override
  run() {
    // TODO: implement run
    print('cat run');
  }
}
```

## 一个类实现多个接口

在实现接口时用 `,` 隔开,就可实现多个接口

```dart
void main(List<String> args) {
  C c = new C();
  print(c.name);
  c.printA();
}

abstract class A {
  late String name;
  printA();
}

abstract class B {
  late int age;
  printB();
}

class C implements A, B {
  @override
  int age = 18;

  @override
  String name = 'C';

  @override
  printA() {
    // TODO: implement printA
    print('a');
  }

  @override
  printB() {
    // TODO: implement printB
    print('b');
  }
}
```
