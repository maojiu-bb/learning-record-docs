# CSS :global

在 CSS 局部作用域覆盖默认样式。

如覆盖 Ant Design 组件的默认样式。

```css
// index.module.scss

.father {
  color: green;
}

:global {
  // antd 的默认样式被覆盖
  .ant-form-head {
    color: red;
  }
}
```

```js
import { Form } from 'antd';
import styles from './index.module.scss';

export default const Hello = () => {
  return (
    <Form>
      <div className={styles.father}></div>
    </Form>
  )
}
```

**相关链接**

[CSS 中的 global](https://blog.csdn.net/qq_36209248/article/details/90603474)
