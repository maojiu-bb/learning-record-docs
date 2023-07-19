# 抽象类

Dart 中抽象类:

- Dart 抽象类主要用于定义标准，子类可以继承抽象类，也可以实现抽象类接口。
  > 1. 抽象类通过 abstract 关键字来定义
  > 2. Dart 中的抽象方法不能用 abstract 声明，Dart 中没有方法体的方法我们称为抽象方法。
  > 3. 如果子类继承抽象类必须得实现里面的抽象方法
  > 4. 如果把抽象类当做接口实现的话必须得实现抽象类里面定义的所有属性和方法。
  > 5. 抽象类不能被实例化，只有继承它的子类可以
- extends 抽象类和 implements 的区别:
  > 1. 如果要复用抽象类里面的方法，并且要用抽象方法约束自类的话我们就用 extends 继承抽象类
  > 2. 如果只是把抽象类当做标准的话我们就用 implements 实现抽象类

```dart
void main(List<String> args) {
  Dog d = new Dog();
  d.eat();
  d.run();
  d.printInfo();

  Cat c = new Cat();
  c.eat();
  c.run();
  c.printInfo();
}

// 抽象类
abstract class Animal {
  eat(); // 抽象方法,在子类中必须实现
  run();
  printInfo() {
    // 抽象类中的普通方法
    print('抽象类中的普通方法');
  }
}

class Dog extends Animal {
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

class Cat extends Animal {
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
