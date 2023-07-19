# 对象操作符

## ? 条件操作符

```dart
void main(List<String> args) {

  Person p = new Person('maojiu', 18);
   Person p;
   p?.printInfo();
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void printInfo() {
    print('name:${this.name}---age:${this.age}');
  }
}

```

## as 类型转换

```dart
void main(List<String> args) {

  Person p = new Person('maojiu', 18);

  var p1;
  p1 = new Person('maojiu', 18);
  (p1 as Person).printInfo();

}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void printInfo() {
    print('name:${this.name}---age:${this.age}');
  }
}
```

## is 类型判断

```dart
void main(List<String> args) {

  Person p = new Person('maojiu', 18);
   if (p is Person) {
     p.name = 'John';
   }
   print(p.name);
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void printInfo() {
    print('name:${this.name}---age:${this.age}');
  }
}
```

## .. 级联操作

```dart
void main(List<String> args) {

  Person p = new Person('maojiu', 18);
  p
    ..name = 'John'
    ..age = 20
    ..printInfo();
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void printInfo() {
    print('name:${this.name}---age:${this.age}');
  }
}
```
