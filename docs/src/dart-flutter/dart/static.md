# 静态成员和方法

通过 `static` 关键字来定义静态成员和方法

```dart
void main(List<String> args) {
  Person p = new Person();
  print(Person.name);
  print(p.age);
  print(Person.getName());
  print(p.getAge());
}

class Person {
  static String name = 'John';
  int age = 18;

// 静态方法可以访问静态成员和方法,不能访问非静态成员和方法
  static String getName() {
    return name;
  }

// 非静态方法可以访问静态属性和方法和非静态属性和方法
  int getAge() {
    return this.age;
  }

  String getInfo() {
    return 'name:${name}---age:${this.age}';
  }
}

```
