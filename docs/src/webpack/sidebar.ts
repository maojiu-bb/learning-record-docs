/**
 * @webpackConfig
 */

import type { TsidebarItem } from '../../types/global'

export const webpack = (): TsidebarItem[] => {
  return [
    {
      text: '基础',
      items: [
        {
          text: '基本使用',
          link: '/webpack/base/basicUse'
        },
        {
          text: '基本配置',
          link: '/webpack/base/basicConfig'
        },
        {
          text: '开发模式',
          link: '/webpack/base/developMode'
        },
        {
          text: '处理样式资源',
          link: '/webpack/base/resolveStyle'
        },
        {
          text: '处理图片资源',
          link: '/webpack/base/resolveImage'
        },
        {
          text: '修改输出资源的名称与路径',
          link: '/webpack/base/changeOutput'
        },
        {
          text: '自动清空打包资源',
          link: '/webpack/base/autoclearDist'
        },
        {
          text: '处理字体图标',
          link: '/webpack/base/resolveIcon'
        },
        {
          text: '处理其他资源',
          link: '/webpack/base/resolveOther'
        },
        {
          text: '处理js资源',
          link: '/webpack/base/resolveJs'
        },
        {
          text: '处理html资源',
          link: '/webpack/base/resolveHtml'
        },
        {
          text: '开发服务器&自动化',
          link: '/webpack/base/autoServer'
        },
        {
          text: '生成模式',
          link: '/webpack/base/productionMode'
        },
        {
          text: '处理Css',
          link: '/webpack/base/resolveCss'
        }
      ]
    },
    {
      text: '高级',
      items: [
        {
          text: '提升开发体验',
          link: '/webpack/senior/developmentExperience'
        },
        {
          text: '提升打包速度',
          link: '/webpack/senior/developmentBuildSpeed'
        },
        {
          text: '减少代码体积',
          link: '/webpack/senior/reduceCodeVolume'
        },
        {
          text: '优化代码运行性能',
          link: '/webpack/senior/optimizePerformance'
        }
      ]
    },
    {
      text: '项目',
      items: [
        {
          text: 'React脚手架',
          link: '/webpack/project/react-cli'
        },
        {
          text: 'Vue脚手架',
          link: '/webpack/project/vue-cli'
        }
      ]
    },
    {
      text: '原理',
      items: [
        {
          text: 'Loader原理',
          link: '/webpack/principle/loader'
        },
        {
          text: 'Plugin原理',
          link: '/webpack/principle/plugin'
        }
      ]
    }
  ]
}
