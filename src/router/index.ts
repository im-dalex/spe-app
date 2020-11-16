import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/home/home.vue')
  },
  {
    name: 'permission',
    path: '/permission',
    component: () => import('../views/permission/permission.vue')
  },
  {
    name: 'permission-crud',
    path: '/permission-crud',
    component: () => import('../views/permission/permission-crud/permission-crud.vue'),
    meta: {
      parent: "permission"
    }
  },
  {
    path: '*',
    component: () => import('../views/Error404.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router
