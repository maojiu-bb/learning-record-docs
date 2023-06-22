# 父选择器 (Parent Selectors)

在嵌套规则中， & 表示父选择器，常用于给现有选择器添加伪类。

```less
.header {
  a {
    color: blue;
    &:hover {
      color: green;
    }
  }
}
```

```css
.header a {
  color: blue;
}
.header a:hover {
  color: green;
}
```

如果没有 `&`，会被编译成后代选择器 `a :hover`。

除此之外，`&` 还能用于生成重复类名：

```less
.button {
  &-ok {
    background-image: url('ok.png');
  }
  &-cancel {
    background-image: url('cancel.png');
  }

  &-custom {
    background-image: url('custom.png');
  }
}
```

```css
.button-ok {
  background-image: url('ok.png');
}
.button-cancel {
  background-image: url('cancel.png');
}
.button-custom {
  background-image: url('custom.png');
}
```
