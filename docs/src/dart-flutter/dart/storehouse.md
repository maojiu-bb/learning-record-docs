# 库

> Dart 中的库可以分为三种：自定义库、内置库、第三方库，这与 JavaScript 中的模块相类似

## 自定义库

自己定义的一个`.dart`文件就可以称为一个自定义库

- Animal.dart

```dart
class Animal {
  String _name; // 使用 _ 来定义私有属性
  int age;

  Animal(this._name, this.age);

  String getName() {
    return this._name;
  }
}
```

- main.dart

```dart
import 'lib/Animal.dart';

void main(List<String> args) {
  Animal am = new Animal('dog', 3);
  print(am.age);
  print(am.getName());
}
```

## 内置库

Dart 内置了很多库，如 `dart:io`, `dart:convert`等

```dart
import 'dart:io';
import 'dart:convert';

void main(List<String> args) async {
  var result = await getDataFromZhiHuAPI();
  print(result);
}

getDataFromZhiHuAPI() async {
  // 创建 httpClient 对象
  var httpClient = new HttpClient();
  // 创建 Uri 对象
  var uri = new Uri.http('news-at.zhihu.com', '/api/3/stories/latest');
  // 发请求等待请求结果
  var request = await httpClient.getUrl(uri);
  // 关闭请求，等待相应
  var response = await request.close();
  // 解码响应内容
  return await response.transform(utf8.decoder).join();
}
```

## pub 库

pub 库也称为第三方库，需要下载下来

:::tip
Dart Packages (https://pub.dev/)

这个也是包管理工具，就类似于 npm
:::

- 先在项目根目录创建 `pubspec.yaml` 文件，并写入下面内容

```yaml
name: maojiu
description: A new flutter module project
dependencies:
  # ...
environment:
  sdk: '^3.0.0'
```

- 添加 pub 库

在终端中输入，这里的 `http`为 pub 库名

```bash
dart pub add http
```

- 拉取 pub 库

```bash
dart pub get
```

- 在文件中使用

```dart
import 'dart:convert' as convert;

import 'package:date_format/date_format.dart';
import 'package:http/http.dart' as http;

void main(List<String> arguments) async {
  // This example uses the Google Books API to search for books about http.
  // https://developers.google.com/books/docs/overview
  var url = Uri.http('news-at.zhihu.com', '/api/3/stories/latest');

  // Await the http get response, then decode the json-formatted response.
  var response = await http.get(url);
  if (response.statusCode == 200) {
    var jsonResponse =
        convert.jsonDecode(response.body) as Map<String, dynamic>;
    print(jsonResponse);
  } else {
    print('Request failed with status: ${response.statusCode}.');
  }

  print(formatDate(DateTime(1989, 2, 21), [yyyy, '-', mm, '-', dd]));
}
```

## 库的重命名

在导入库后使用 `as` 关键字将库重命名

```dart
import 'package:http/http.dart' as http;
```

## 库的按需导入

- 用 `show` 关键字，只导入需要的部分
- 用 `hide` 关键字，隐藏不需要的部分

```dart
import 'lib/Person.dart' show getAge;
import 'lib/Person.dart' hide getName;

void main(List<String> args) {
  lib.Animal a = new lib.Animal('dog', 10);
  print(a.getName());

  getAge();
  getSex();
}
```
