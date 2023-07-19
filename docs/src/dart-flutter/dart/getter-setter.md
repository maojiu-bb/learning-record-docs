# getter 和 setter

在 Dart 中提供了`get`和`set`

```dart
void main(List<String> args) {
  Rect r = new Rect();
  print(r.area); // 20
  r.areaHeigth = 10;
  print(r.area); // 100
}

class Rect {
  int height;
  int width;

// 初始化列表
  Rect()
      : width = 10,
        height = 2 {
    print('${this.height}---${this.width}');
  }

  // getter
  get area {
    return this.height * this.width;
  }

  //setter
  set areaHeigth(value) {
    this.height = value;
  }
}

```
