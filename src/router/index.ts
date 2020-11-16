import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/permission',
    name: 'permission',
    component: () => import('../views/permission/permission')
  },
  {
    path: '/permission-crud/:id',
    name: 'permission-crud',
    component: () => import('../views/permission/permission'),
    meta: {
      parent: "permission"
    }
  },
  {
    path: '*',
    component: () => import('../views/Error404.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
