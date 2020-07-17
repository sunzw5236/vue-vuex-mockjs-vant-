import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'wellcome',
    component: () => import( /* webpackChunkName: "about" */ '../views/wellcome.vue')
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/home.vue')
  }, {
    path: '/classification',
    name: 'classification',
    component: () => import( /* webpackChunkName: "about" */ '../views/classification.vue')
  }, {
    path: '/community',
    name: 'community',
    component: () => import( /* webpackChunkName: "about" */ '../views/community.vue')
  }, {
    path: '/self',
    name: 'self',
    component: () => import( /* webpackChunkName: "about" */ '../views/self.vue')
  }, {
    path: '/shopping_cart',
    name: 'shopping_cart',
    component: () => import( /* webpackChunkName: "about" */ '../views/shopping_cart.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router