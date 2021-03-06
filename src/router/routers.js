import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/ceshi',
    name: 'ceshi',
    meta: {
      title: 'ceshi - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/single-page/ceshi')
  },
  {
    path: '/',
    name: 'home',
    component: Main,
    meta: {
      hide: true
    },
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          hideInMenu: false,
          title: '首页',
          icon: 'ios-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/syztgl',
    name: 'syztgl',
    meta: {
      icon: 'logo-buffer',
      title: '溯源主体管理'
    },
    component: Main,
    children: [
      {
        path: 'zcrzsh',
        name: 'zcrzsh',
        meta: {
          icon: 'md-person-add',
          title: '注册认证审核',
        },
        component: () => import('@/view/syztgl/zcrzsh.vue'),
      },
      {
        path: 'zcrzsh/:id',
        name: 'zcrzsh',
        meta: {
          icon: 'md-flower',
          title: '注册认证详情',
          notCache: true,
          beforeCloseName: 'before_close_normal',
          hideInMenu:true
        },
        component: () => import('@/view/syztgl/zcrzshdetailed.vue')
      },
      {
        path: 'dagxsh',
        name: 'dagxsh',
        meta: {
          icon: 'ios-folder',
          title: '档案更新审核'
        },
        component: () => import('@/view/syztgl/dagxsh.vue')
      },
      {
        path: 'dagxsh/:id',
        name: 'dagxsh',
        meta: {
          icon: 'md-flower',
          title: '注册认证详情',
          notCache: true,
          beforeCloseName: 'before_close_normal',
          hideInMenu:true
        },
        component: () => import('@/view/syztgl/dagxshdetailed.vue')
      },
      {
        path: 'ycztgl',
        name: 'ycztgl',
        meta: {
          icon: 'md-alert',
          title: '异常主体管理'
        },
        component: () => import('@/view/syztgl/ycztgl.vue')
      },
      {
        path: 'ycztgl/:id',
        name: 'ycztgl',
        meta: {
          icon: 'md-flower',
          title: '注册认证详情',
          notCache: true,
          beforeCloseName: 'before_close_normal',
          hideInMenu:true
        },
        component: () => import('@/view/syztgl/ycztgldetailed.vue')
      },
      {
        path: 'syztlb',
        name: 'syztlb',
        meta: {
          icon: 'ios-list-box',
          title: '溯源主体列表'
        },
        component: () => import('@/view/syztgl/syztlb.vue')
      },
      {
        path: 'syztlb/:id',
        name: 'syztlb',
        meta: {
          icon: 'md-flower',
          title: '溯源主体详情',
          notCache: true,
          beforeCloseName: 'before_close_normal',
          hideInMenu:true
        },
        component: () => import('@/view/syztgl/syztlbdetailed.vue')
      },
    ]
  },
  {
    path: '/sycpcx',
    name: 'sycpcx',
    component: Main,
    meta: {
      hide: true
    },
    children: [
      {
        path: '/sycpcx',
        name: 'sycpcx',
        meta: {
          hideInMenu: false,
          title: '溯源产品查询',
          icon: 'md-search',
        },
        component: () => import('@/view/single-page/sycpcx')
      }
    ]
  },
  {
    path: '/trpsyjl',
    name: 'trpsyjl',
    component: Main,
    meta: {
      hide: true
    },
    children: [
      {
        path: '/trpsyjl',
        name: 'trpsyjl',
        meta: {
          hideInMenu: false,
          title: '投入品使用记录',
          icon: 'md-document',
        },
        component: () => import('@/view/single-page/trpsyjl')
      }
    ]
  },

  {
    path: '/dcxcgl',
    name: 'dcxcgl',
    meta: {
      icon: 'logo-buffer',
      title: '督查巡查管理'
    },
    component: Main,
    children: [
      {
        path: 'dcxcrw',
        name: 'dcxcrw',
        meta: {
          icon: 'md-checkbox-outline',
          title: '督查巡查任务'
        },
        component: () => import('@/view/dcxcgl/dcxcrw.vue')
      },
      {
        path: 'dcxcrwadd',
        name: 'dcxcrw',
        meta: {
          icon: 'md-flower',
          title: '新增督查巡查任务',
          notCache: true,
          beforeCloseName: 'before_close_normal',
          hideInMenu:true
        },
        component: () => import('@/view/dcxcgl/add-dcxcrw.vue')
      },
      {
        path: 'dcxcrw/:id',
        name: 'dcxcrw',
        meta: {
          icon: 'md-checkbox-outline',
          title: '督查巡查记录详情',
          hideInMenu:true
        },
        component: () => import('@/view/dcxcgl/dcxcrwdetailed.vue')
      },
      {
        path: 'dcxcjl',
        name: 'dcxcjl',
        meta: {
          icon: 'md-document',
          title: '督查巡查记录'
        },
        component: () => import('@/view/dcxcgl/dcxcjl.vue')
      },
      {
        path: 'dcxcjladd',
        name: 'dcxcjl',
        meta: {
          icon: 'md-flower',
          title: '新增督查巡查记录',
          notCache: true,
          beforeCloseName: 'before_close_normal',
          hideInMenu:true
        },
        component: () => import('@/view/dcxcgl/add-dcxcjl.vue')
      },

      {
        path: 'dcxcjl/:id',
        name: 'dcxcjl',
        meta: {
          icon: 'md-checkbox-outline',
          title: '督查巡查记录详情',
          hideInMenu:true
        },
        component: () => import('@/view/dcxcgl/dcxcjldetailed.vue')
      },
    ]
  },
  {
    path: '/cpcjgl',
    name: 'cpcjgl',
    meta: {
      icon: 'logo-buffer',
      title: '产品检查管理'
    },
    component: Main,
    children: [
      {
        path: 'cpcjrw',
        name: 'cpcjrw',
        meta: {
          icon: 'md-checkbox-outline',
          title: '产品抽检任务'
        },
        component: () => import('@/view/cpjcgl/cpcjrw.vue')
      },
      {
        path: 'cpcjrwadd',
        name: 'cpcjrw',
        meta: {
          icon: 'md-checkbox-outline',
          title: '新增产品抽检任务',
          hideInMenu:true
        },
        component: () => import('@/view/cpjcgl/add-cpcjrw.vue')
      },
      {
        path: 'cpcjrw/:id',
        name: 'cpcjrw',
        meta: {
          icon: 'md-checkbox-outline',
          title: '新增产品抽检任务',
          hideInMenu:true
        },
        component: () => import('@/view/cpjcgl/cpcjrwdetailed.vue')
      },
      {
        path: 'cpcjjl',
        name: 'cpcjjl',
        meta: {
          icon: 'md-document',
          title: '产品抽检记录'
        },
        component: () => import('@/view/cpjcgl/cpcjjl.vue')
      },
      {
        path: 'cpcjjladd',
        name: 'cpcjjl',
        meta: {
          icon: 'md-checkbox-outline',
          title: '新增产品抽检记录',
          hideInMenu:true
        },
        component: () => import('@/view/cpjcgl/add-cpcjjl.vue')
      },
      {
        path: 'cpcjjl/:id',
        name: 'cpcjjl',
        meta: {
          icon: 'md-checkbox-outline',
          title: '新增产品抽检记录',
          hideInMenu:true
        },
        component: () => import('@/view/cpjcgl/cpcjjldetailed.vue')
      },
    ]
  },
  {
    path: '/sjtjfx',
    name: 'sjtjfx',
    meta: {
      icon: 'md-trending-up',
      title: '数据统计分析'
    },
    component: Main,
    children: [
      {
        path: 'syqytj',
        name: 'syqytj',
        meta: {
          icon: 'md-trending-up',
          title: '溯源企业统计'
        },
        component: () => import('@/view/sjtjfx/syqytj.vue')
      },
      {
        path: 'sycptj',
        name: 'sycptj',
        meta: {
          icon: 'md-trending-up',
          title: '溯源产品统计'
        },
        component: () => import('@/view/sjtjfx/sycptj.vue')
      },
      {
        path: 'ncpzsmtj',
        name: 'ncpzsmtj',
        meta: {
          icon: 'md-trending-up',
          title: '农产品追溯码统计'
        },
        component: () => import('@/view/sjtjfx/ncpzsmtj.vue')
      },
      {
        path: 'trpsyfx',
        name: 'trpsyfx',
        meta: {
          icon: 'md-trending-up',
          title: '投入品使用分析'
        },
        component: () => import('@/view/sjtjfx/trpsyfx.vue')
      },
      {
        path: 'dcxctj',
        name: 'dcxctj',
        meta: {
          icon: 'md-trending-up',
          title: '督查巡查统计'
        },
        component: () => import('@/view/sjtjfx/dcxctj.vue')
      },
      {
        path: 'cpcjtj',
        name: 'cpcjtj',
        meta: {
          icon: 'md-trending-up',
          title: '产品抽检统计'
        },
        component: () => import('@/view/sjtjfx/cpcjtj.vue')
      },
      {
        path: 'zsmcxtj',
        name: 'zsmcxtj',
        meta: {
          icon: 'md-trending-up',
          title: '追溯码查询统计'
        },
        component: () => import('@/view/sjtjfx/zsmcxtj.vue')
      },
    ]
  },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `动态路由-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `带参路由-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
