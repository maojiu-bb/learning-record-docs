# 循环

## for 循环

- 简单示例

```dart
for (int i = 0; i < 10; i++) {
    print(i);
  }
```

- 遍历 List

```dart
List list = [
    {
      'cate': 'cate1',
      'new': [
        {'title': 'cate1 new1'},
        {'title': 'cate1 new2'},
        {'title': 'cate1 new3'}
      ]
    },
    {
      'cate': 'cate2',
      'new': [
        {'title': 'cate2 new1'},
        {'title': 'cate2 new2'},
        {'title': 'cate2 new3'}
      ]
    }
  ];
  for (int i = 0; i < list.length; i++) {
    print(list[i]['cate']);
    for (int j = 0; j < list[i]['new'].length; j++) {
      print(list[i]['new'][j]['title']);
    }
    print('----------');
  }
```

## while 循环

```dart
 int i = 0;
  while (i < 10) {
    print(i);
    i++;
  }
```

## do ... while 循环

```dart
int i = 0;
  do {
    print(i);
    i++;
  } while (i < 10);
```
