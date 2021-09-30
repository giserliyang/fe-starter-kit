import Main from '@/views/Main'
import Layout from '@/components/Layout'
import Temp from '@/views/temp'
const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/plan-support',
    name: 'planSupport',
    component: Main,
    meta: {
      title: '规划支撑',
      breadcrumb: false
    },
    children: [
      {
        path: 'demand-to-plan',
        name: 'demandToPlan',
        component: Layout,
        meta: {
          title: '需求转规划(5G)',
          breadcrumb: false
        },
        children: [
          {
            path: 'smart-plan',
            name: 'smartPlan',
            component: () => import(/* webpackChunkName: "a" */ '@/views/temp'),
            meta: {
              title: '5G智能规划'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/value',
    name: 'value',
    component: Main,
    meta: {
      title: '价值口碑',
      breadcrumb: false
    },
    children: [
      {
        path: 'koubei-scene',
        name: 'koubeiScene',
        component: Layout,
        meta: {
          title: '口碑场景',
          breadcrumb: false
        },
        children: [
          {
            path: 'quality',
            name: 'quality',
            component: Temp,
            meta: {
              title: '口碑质量'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/menu',
    name: 'menu',
    component: Main,
    meta: {
      title: 'menu'
    },
    children: [
      {
        path: 'sub',
        name: 'sub',
        component: Temp,
        meta: {
          title: 'menu-sub'
        }
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]

export default routes
