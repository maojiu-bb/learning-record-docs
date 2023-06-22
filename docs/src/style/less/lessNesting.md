# 嵌套(Nesting)

Less 提供了使用嵌套(nesting)代替层叠或与层叠结合使用的能力

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

```css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```
