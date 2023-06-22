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
          link: '/vue/vue2/index'
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
