import { createRouter, createWebHistory } from 'vue-router'
import LangingPage from '../pages/LangingPage'


const routes = [
  {
    path: '/',
    name: 'home',
    component: LangingPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/AboutPage.vue')
  },
  {
    path: '/Files',
    name: 'files',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/FilesPage.vue')
  },
  {
    path: '/contact',
    name: 'contactPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/ContactPage.vue')
  },
  {
    path: '/confirmation',
    name: 'confirmationPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/ConfirmationPage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
