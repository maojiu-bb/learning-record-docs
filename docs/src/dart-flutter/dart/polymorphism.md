# 多态

Datr 中的多态:

> 1. 允许将子类类型的指针赋值给父类类型的指针，同一个函数调用会有不同的执行效果。
> 2. 子类的实例赋值给父类的引用。
> 3. 多态就是父类定义一个方法不去实现，让继承他的子类去实现，每个子类有不同的表现。

```dart
void main(List<String> args) {
  Animal d = new Dog();
  d.run();

  Animal c = new Cat();
  c.eat();
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
