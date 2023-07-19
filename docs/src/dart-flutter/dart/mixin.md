# Mixin 混入

> mixins 的中文意思是混入，就是在类中混入其他功能。在 Dart 中可以使用 mixins 实现类似多继承的功能

> 因为 mixins 使用的条件，随着 Dart 版本一直在变，这里讲的是 Dart2.x 中使用 mixins 的条件:
>
> 1. 作为 mixins 的类只能继承自 Object，不能继承其他类
> 2. 作为 mixins 的类不能有构造函数
> 3. 一个类可以 mixins 多个 mixins 类
> 4. mixins 绝不是继承，也不是接口,，而是一种全新的特性

```dart
void main(List<String> args) {
  C c = new C('maojiu', 18);
  c.printInfo();
  c.printA();
  c.printB();
  c.run(); // b run
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void printInfo() {
    print('name:${this.name}--age:${this.age}');
  }

  void run() {
    print('person run');
  }
}

mixin class A {
  void printA() {
    print('A');
  }

  void run() {
    print('a run');
  }
}

mixin class B {
  void printB() {
    print('B');
  }

  void run() {
    print('b run');
  }
}

class C extends Person with A, B {
  C(super.name, super.age);
}
```

当多个混入中与继承类中都有相同的方法,以**with 最后面的一个混入为准**
