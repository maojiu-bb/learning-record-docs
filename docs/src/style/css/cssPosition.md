# CSS 定位

## 静态定位 static

默认定位，相当于没有定位。

## 相对定位 relative

- 相对于元素原本的位置进行偏移
- 元素会浮起来，脱离标准流，但仍然占据原本的位置

## 绝对定位 absolute

- 相对于最近的具有定位属性的父元素进行偏移，若没有，则相对于 body 进行偏移
- 元素脱离标准流，且不占据原本的位置
- 通常是“子绝父相”

## 固定定位 fixed

- 相对于浏览器窗口进行偏移
- 不会随着浏览器窗口的滚动而滚动
- 可用于创建固定头部、底部

```css
// 创建全屏遮罩
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
}
```

**相关链接**

[CSS 的几种定位详解](https://blog.csdn.net/weixin_38055381/article/details/81558288)
