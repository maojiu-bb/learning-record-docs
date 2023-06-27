/**
 * @VueSidebar
 */

import type { TsidebarItem } from '../../types/global'

export const vue = (): TsidebarItem[] => {
  return [
    {
      text: 'Vue2',
      items: [
        {
          text: 'Hello Vue2',
          link: '/vue/vue2/hello'
        },
        {
          text: '数据代理',
          link: '/vue/vue2/dataProxy'
        },
        {
          text: '数据监测',
          link: '/vue/vue2/dataObserver'
        },
        {
          text: '插值语法 {{}}',
          link: '/vue/vue2/interSyntax'
        },
        {
          text: '属性绑定指令 v-bind',
          link: '/vue/vue2/propBinding'
        },
        {
          text: '双向绑定指令 v-model',
          link: '/vue/vue2/modelBinding'
        },
        {
          text: '事件绑定指令 v-on',
          link: '/vue/vue2/eventBinding'
        },
        {
          text: '条件渲染指令',
          link: '/vue/vue2/conditionDirectives'
        }
      ]
    },
    {
      text: 'Vue3',
      items: [
        {
          text: 'Hello Vue3',
          link: '/vue/vue3/index'
        }
      ]
    },
    {
      text: 'Vue-Router',
      items: [
        {
          text: 'Hello Vue-Router',
          link: '/vue/vue-router/index'
        }
      ]
    },
    {
      text: 'Vuex',
      items: [
        {
          text: 'Hello Vuex',
          link: '/vue/vuex/index'
        }
      ]
    },
    {
      text: 'Pinia',
      items: [
        {
          text: 'Hello Pinia',
          link: '/vue/pinia/index'
        }
      ]
    }
  ]
}
