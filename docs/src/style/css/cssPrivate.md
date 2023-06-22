# CSS 属性浏览器私有前缀

```
Google Chrome、Safari：-webkit-
Firefox：-moz-
IE：-ms-
Opera：-o-
```

私有前缀是为了兼容老版本的浏览器。

什么是兼容？可以简单理解为一段代码在新的浏览器能正常运行，在老版本的浏览器也能正常运行。

对于一些新的 CSS 属性，老浏览器可能运行异常，通过添加私有前缀，让这个属性只在指定内核的浏览器生效，老浏览器就忽略这个属性。

等到该属性成熟、所有浏览器都支持后，就可以去掉私有前缀。

```css
h1 {
  font-size: 40px;
  color: black;
  -webkit-text-stroke: 2px red;
}
```

**相关链接**

[浏览器的私有前缀理解](https://blog.csdn.net/Dreammin/article/details/104663120)

[-moz、-ms、-webkit 浏览器私有前缀详解，作用、出处](https://blog.csdn.net/wyx100/article/details/50450728)
