# 常量构造函数

> 常量构造函数总结如下几点:
>
> 1. 常量构造函数需以 const 关键字修饰
> 2. const 构造函数必须用于成员变量都是 final 的类
> 3. 如果实例化时不加 const 修饰符，即使调用的是常量构造函数，实例化的对象也个定吊里头
> 4. 实例化常量构造函数的时候，多个地方创建这个对象，如果传入的值相同，只会保留一个对象
> 5. Flutter 中 const 修饰不仅仅是节省组件构建时的内存开销，Flutter 在需要重新构建组件是不应该改变的，重新构建没有任何意义，因此 Flutter 不会重新构建 const 组件

```dart
void main(List<String> args) {
  Container c1 = const Container(width: 100, height: 100);
  Container c2 = const Container(width: 100, height: 100);

  print(identical(c1, c2)); // true
}

// 常量构造函数
class Container {
  final int width;
  final int height;
  const Container({required this.width, required this.height});
}

```
