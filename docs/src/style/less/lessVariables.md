# 变量(Variables)

## 基本使用

- @ 声明变量，作为普通属性值使用

```less
@width: 50px;
@height: 100px;

div {
  width: @width;
  height: @height;
}
```

## 变量插值(Variable Interpolation)

- 变量用于选择器名、属性名、URL、@import 语句

```less
@my-selector: banner;

// 需要添加 {}
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

```less
@property: color;

.widget {
  @{property}: #0ee;
  background-@{property}: #999;
}
```

```less
// Variables
@images: '../img';

// Usage
body {
  color: #444;
  background: url('@{images}/white-sand.png');
}
```

```less
// Variables
@themes: '../../src/themes';

// Usage
@import '@{themes}/tidal-wave.less';
```

## 延迟加载(Lazy Evaluation)

:::tip
Lazy Evaluation

当定义一个变量两次时，使用变量的最后一个定义，从当前范围向上搜索。
:::
当一个变量被声明多次，会取最后一次的值，并从当前作用域往外寻找变量。

```less
@var: 0;
.class {
  @var: 1;
  .brass {
    @var: 2;
    three: @var;
    @var: 3;
  }
  one: @var;
}
```

```css
.class {
  one: 1;
}
.class .brass {
  three: 3;
}
```

## 属性名变量(Properties as Variables)

:::tip
Properties as Variables

您可以使用$prop 语法轻松地将属性视为变量
:::

```less
.widget {
  color: #efefef;
  background-color: $color;
}
```

```css
.widget {
  color: #efefef;
  background-color: #efefef;
}
```
