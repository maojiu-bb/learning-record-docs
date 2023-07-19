# 继承

- 通过 `extends` 关键字来继承父类

```dart
void main(List<String> args) {
  Son s = new Son('maojiu', 19, '程序猿');
  print(s.name);
  s.printInfo();
  s.workInfo();
}

class Father {
  String name;
  int age;
  String work;

  Father(this.name, this.age, this.work);

  void printInfo() {
    print('name:${this.name}--age:${this.age}');
  }

  void workInfo() {
    print('work:${this.work}');
  }
}

class Son extends Father {
  Son(super.name, super.age, super.work);
}

```

- 对父类进行重写

```dart {27-36}
void main(List<String> args) {
  Son s = new Son('maojiu', 19, '程序猿');
  print(s.name);
  s.printInfo();
  s.workInfo();
}

class Father {
  String name;
  int age;
  String work;

  Father(this.name, this.age, this.work);

  void printInfo() {
    print('name:${this.name}--age:${this.age}');
  }

  void workInfo() {
    print('work:${this.work}');
  }
}

class Son extends Father {
  Son(super.name, super.age, super.work);

  // 对父类方法重写
  @override
  void printInfo() {
    print('age:${this.age}--name:${this.name}');
  }

  @override
  void workInfo() {
    print('工作:${this.work}');
  }
}

```
