# Map 常用的属性和方法

## 常用属性

### keys

通过`keys`来获取所有的 key 值

```dart
var person = {"name": "John", "age": 18};
print(person.keys.toList());
```

### values

通过`values`来获取所有的 value 值

```dart
var person = {"name": "John", "age": 18};
print(person.values.toList());
```

### isEmpty & isNotEmpty

通过`isEmpty` and `isNotEmpty`来判断是否为空

```dart
var person = {"name": "John", "age": 18};
print(person.isEmpty); // false
print(person.isNotEmpty);  // true
```

## 常用方法

### remove

通过`remove(key)`来删除指定 key 的数据

```dart
var person = {"name": "John", "age": 18};
person.remove('name');
```

### addAll

使用`addAll({...})`来合并 Map 映射

```dart
var person = {"name": "John", "age": 18};
person.addAll({"sex": "男"});
```

### containsKey

使用`containsKey`来查看映射内的键(返回 true/false)

```dart
var person = {"name": "John", "age": 18};
print(person.containsKey("name"));
```

### containsValue

使用`containsValue`来查看映射内的值(返回 true/false)

```dart
var person = {"name": "John", "age": 18};
print(person.containsValue("John"));
```
