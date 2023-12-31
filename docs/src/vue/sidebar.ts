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
        },
        {
          text: '列表渲染指令',
          link: '/vue/vue2/listDirectives'
        },
        {
          text: '其他内置指令',
          link: '/vue/vue2/otherDirectives'
        },
        {
          text: '过滤器',
          link: '/vue/vue2/filter'
        },
        {
          text: 'computed 计算属性',
          link: '/vue/vue2/computed'
        },
        {
          text: 'watch 侦听器',
          link: '/vue/vue2/watch'
        },
        {
          text: '动态绑定 class 和 style',
          link: '/vue/vue2/dynamicBinding'
        },
        {
          text: '生命周期',
          link: '/vue/vue2/lifeCycle'
        },
        {
          text: '单文件组件',
          link: '/vue/vue2/singleFileComponent'
        },
        {
          text: 'scoped 解决样式冲突',
          link: '/vue/vue2/scoped'
        },
        {
          text: '组件通信',
          link: '/vue/vue2/componentCommunication'
        },
        {
          text: '动态组件',
          link: '/vue/vue2/dynamicComponents'
        },
        {
          text: 'keep-alive',
          link: '/vue/vue2/keepAlive'
        },
        {
          text: '插槽',
          link: '/vue/vue2/slot'
        },
        {
          text: '自定义指令',
          link: '/vue/vue2/customDirectives'
        },
        {
          text: 'Mixin 混入',
          link: '/vue/vue2/mixin'
        },
        {
          text: '插件',
          link: '/vue/vue2/plugin'
        },
        {
          text: 'NextTick',
          link: '/vue/vue2/nextTick'
        },
        {
          text: 'Vue-cli 配置代理',
          link: '/vue/vue2/vue-cli-proxy'
        },
        {
          text: 'Vue2.0x配置全局axios',
          link: '/vue/vue2/axios'
        }
      ]
    },
    {
      text: 'Vue3',
      items: [
        {
          text: 'Hello Vue3',
          link: '/vue/vue3/hello'
        },
        {
          text: '创建 Vue3 工程',
          link: '/vue/vue3/createProject'
        },
        {
          text: 'Vue3 项目结构',
          link: '/vue/vue3/projectStructure'
        },
        {
          text: '常用的 Composition API',
          link: '/vue/vue3/compositionAPI'
        },
        {
          text: '其它 Composition API',
          link: '/vue/vue3/otherAPI'
        },
        {
          text: 'Composition API 的优势',
          link: '/vue/vue3/compositionAdvantage'
        },
        {
          text: '新的组件',
          link: '/vue/vue3/newComponent'
        },
        {
          text: '其他改变',
          link: '/vue/vue3/otherChange'
        },
        {
          text: '组件上的 v-model',
          link: '/vue/vue3/v-model-component'
        },
        {
          text: 'Setup 语法糖',
          link: '/vue/vue3/setup'
        }
      ]
    },
    {
      text: 'Vue-Router',
      items: [
        {
          text: 'Hello Vue-Router',
          link: '/vue/vue-router/hello'
        },
        {
          text: '路由',
          link: '/vue/vue-router/introduce'
        },
        {
          text: '单页面应用程序 SPA',
          link: '/vue/vue-router/spa'
        },
        {
          text: 'vue-router 初体验',
          link: '/vue/vue-router/firstExperience'
        },
        {
          text: '声明式导航',
          link: '/vue/vue-router/declarNavigation'
        },
        {
          text: '路由高亮',
          link: '/vue/vue-router/routerActive'
        },
        {
          text: '路由重定向',
          link: '/vue/vue-router/redirect'
        },
        {
          text: '嵌套路由',
          link: '/vue/vue-router/nestedRoutes'
        },
        {
          text: '编程式导航',
          link: '/vue/vue-router/programNavigation'
        },
        {
          text: '命名路由',
          link: '/vue/vue-router/namedRoutes'
        },
        {
          text: '路由传参',
          link: '/vue/vue-router/routeParameters'
        },
        {
          text: '路由元信息',
          link: '/vue/vue-router/routeMeta'
        },
        {
          text: '路由守卫',
          link: '/vue/vue-router/routeGuard'
        },
        {
          text: 'Vue-Router 4.0x',
          link: '/vue/vue-router/vue-router4'
        }
      ]
    },
    {
      text: 'Vuex',
      items: [
        {
          text: 'Hello Vuex',
          link: '/vue/vuex/hello'
        },
        {
          text: 'Vuex 核心概念',
          link: '/vue/vuex/coreConception'
        },
        {
          text: '搭建 Vuex 环境',
          link: '/vue/vuex/environment'
        },
        {
          text: '基本使用',
          link: '/vue/vuex/basicUse'
        },
        {
          text: 'getters 的使用',
          link: '/vue/vuex/useGetters'
        },
        {
          text: '四个 mapXxx 方法',
          link: '/vue/vuex/maps'
        },
        {
          text: 'Vuex 模块化&命名空间',
          link: '/vue/vuex/moduleAndNameSpace'
        }
      ]
    },
    {
      text: 'Pinia',
      items: [
        {
          text: 'Hello Pinia',
          link: '/vue/pinia/hello'
        },
        {
          text: '基本使用',
          link: '/vue/pinia/basicUse'
        },
        {
          text: 'Option Store',
          link: '/vue/pinia/optionStore'
        },
        {
          text: 'Setup Store',
          link: '/vue/pinia/setupStore'
        },
        {
          text: '开发中使用',
          link: '/vue/pinia/developUse'
        }
      ]
    }
  ]
}
