# 泛型

> 当类型不确定时，使用泛型可以有效的减少代码冗余

## 泛型方法

```dart
void main(List<String> args) {
  print(getData<int>(12));
  print(getData<String>('maojiu'));
}

T getData<T>(T value) {
  return value;
}
```

## 泛型类

```dart
void main(List<String> args) {
   MyList list = new MyList<String>();
   list
     ..add('a')
     ..add('b')
     ..add('c');
   print(list.getList());
}

class MyList<T> {
  List list = <T>[];

  void add(T value) {
    this.list.add(value);
  }

  List getList() {
    return list;
  }
}
```

## 泛型接口

```dart
// 泛型接口
abstract class Cache<T> {
  late String key;
  late T value;
  String getByKey(String key);
  void setByKey(String key, T value);
}

class FileCache<T> implements Cache<T> {
  @override
  String key = 'file';

  @override
  late T value;

  @override
  String getByKey(String key) {
    if (key == this.key) {
      return 'key: ${this.key}---value: ${this.value}';
    } else {
      return 'Not Found';
    }
  }

  @override
  void setByKey(String key, T value) {
    this.key = key;
    this.value = value;
  }
}

class MemoryCache<T> implements Cache<T> {
  @override
  String key = 'memory';

  @override
  late T value;

  @override
  String getByKey(String key) {
    if (key == this.key) {
      return 'key: ${this.key}---value: ${this.value}';
    } else {
      return 'Not Found';
    }
  }

  @override
  void setByKey(String key, T value) {
    this.key = key;
    this.value = value;
  }
}
```
