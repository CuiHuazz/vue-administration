import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
Vue.use(VueRouter)

// 导航菜单
let children = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/demo'),
    meta: {
      title: '主页',
      public: true,
      affix: true
    }
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/demo.vue'),
    meta: {
      title: 'demo页',
      public: true
    }
  },
  {
    path: '/option',
    name: 'option',
    component: () => import('../views/option.vue'),
    meta: {
      title: 'option页',
      public: true
    }
  },
  {
    path: '/request',
    name: '列表交互',
    component: () => import('../views/request'),
    meta: {
      title: '列表交互页',
      public: true
    }
  }
]

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('../views/login'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局路由守卫，动态改变tille
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title || 'Vue'
  next()
})

export default router
