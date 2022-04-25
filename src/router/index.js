import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/secure',
    name: 'Secure',
    component: lazyLoad("Secure")
  },
  {
    path: '/login',
    name: 'Login',
    component: lazyLoad("Login")
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: lazyLoad("Dashboard")
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

console.log("history", process.env.BASE_URL)

export default router
