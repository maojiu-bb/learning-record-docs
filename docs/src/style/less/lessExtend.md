# 继承(Extend)

## Extend Syntax

- 继承可让多个选择器应用同一组属性，最终编译为并集选择器
- 其性能比混合高，但灵活性比混合低

```less
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}
```

```css
nav ul {
  background: blue;
}
.inline,
nav ul {
  color: red;
}
```

## Extend "all"

:::tip
Extend "all"

当您在扩展参数中指定 all 关键字时，它会告诉 Less 将该选择器作为另一个选择器的一部分进行匹配。选择器将被复制，并且仅选择器的匹配部分将被替换为扩展，从而创建一个新的选择器。

您可以将这种操作模式视为执行非破坏性搜索和替换
:::

- 可理解为把 all 前的选择器出现的地方全都替换为 extend 前的选择器
- 即把 .test 替换为 .replacement 生成一个新的选择器应用样式，且不破坏原有的选择器

```less
.a.b.test,
.test.c {
  color: orange;
}
.test {
  &:hover {
    color: green;
  }
}

.replacement:extend(.test all) {
}
```

```css
.a.b.test,
.test.c,
.a.b.replacement,
.replacement.c {
  color: orange;
}
.test:hover,
.replacement:hover {
  color: green;
}
```
