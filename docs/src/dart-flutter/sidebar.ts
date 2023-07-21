/**
 * @dartFlutterSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const dartFlutter = (): TsidebarItem[] => {
  return [
    {
      text: 'Dart',
      items: [
        {
          text: 'Dart 初体验',
          link: '/dart-flutter/dart/introduce'
        },
        {
          text: '变量与常量',
          link: '/dart-flutter/dart/var-const'
        },
        {
          text: 'List 和 Map',
          link: '/dart-flutter/dart/List-Map'
        },
        {
          text: '运算符与条件判断',
          link: '/dart-flutter/dart/operator-conditional'
        },
        {
          text: '数据类型转换',
          link: '/dart-flutter/dart/data-type-change'
        },
        {
          text: '循环',
          link: '/dart-flutter/dart/loop'
        },
        {
          text: 'List常用属性和方法',
          link: '/dart-flutter/dart/list'
        },
        {
          text: 'Set',
          link: '/dart-flutter/dart/set'
        },
        {
          text: 'Map常用的属性和方法',
          link: '/dart-flutter/dart/map'
        },
        {
          text: '常用的遍历方法',
          link: '/dart-flutter/dart/traverse'
        },
        {
          text: '函数',
          link: '/dart-flutter/dart/function'
        },
        {
          text: '类和对象',
          link: '/dart-flutter/dart/class'
        },
        {
          text: '私有属性',
          link: '/dart-flutter/dart/private'
        },
        {
          text: 'getter和setter',
          link: '/dart-flutter/dart/getter-setter'
        },
        {
          text: '静态成员和方法',
          link: '/dart-flutter/dart/static'
        },
        {
          text: '对象操作符',
          link: '/dart-flutter/dart/object-operator'
        },
        {
          text: '继承',
          link: '/dart-flutter/dart/extends'
        },
        {
          text: '抽象类',
          link: '/dart-flutter/dart/abstract-class'
        },
        {
          text: '多态',
          link: '/dart-flutter/dart/polymorphism'
        },
        {
          text: '接口',
          link: '/dart-flutter/dart/interface'
        },
        {
          text: 'Mixin 混入',
          link: '/dart-flutter/dart/mixin'
        },
        {
          text: '泛型',
          link: '/dart-flutter/dart/generic'
        },
        {
          text: '库',
          link: '/dart-flutter/dart/storehouse'
        },
        {
          text: '常量构造函数',
          link: '/dart-flutter/dart/const-function'
        }
      ]
    },
    {
      text: 'Flutter',
      items: [
        {
          text: '配置开发环境',
          link: '/dart-flutter/flutter/start'
        },
        {
          text: '创建 Flutter 项目',
          link: '/dart-flutter/flutter/create'
        },
        {
          text: '运行项目',
          link: '/dart-flutter/flutter/run'
        },
        {
          text: '组件',
          link: '/dart-flutter/flutter/components'
        }
      ]
    }
  ]
}
