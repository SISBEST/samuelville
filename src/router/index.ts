import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/equity',
    name: 'Equity for All',
    component: () => import('../views/Equity.vue')
  },
  {
    path: '/safety',
    name: 'Public Safety',
    component: () => import('../views/Safety.vue')
  },
  {
    path: '/transit',
    name: 'Transit',
    component: () => import('../views/Transit.vue')
  },
  {
    path: '/voting',
    name: 'Voting',
    component: () => import('../views/Voting.vue')
  },
  {
    path: '/taxes',
    name: 'Taxes',
    component: () => import('../views/Taxes.vue')
  },
  {
    path: '/health',
    name: 'Health',
    component: () => import('../views/Health.vue')
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('../views/Education.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
