import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
// import Login from '../views/Login.vue'
// import Dashboard from '../views/Dashboard.vue'

// function lazyLoad(view) {
//   return () => import(`@/views/${view}.vue`);
// }

function lazyLoad(view) {
  console.log(import(`@/views/${view}.vue`), "******")
  return () => import(`@/views/${view}.vue`);
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazyLoad("Home"),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/secure',
    name: 'Secure',
    component: lazyLoad("Secure")
  },
  {
    path: '/login',
    name: 'Login',
    component: lazyLoad("Login"),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: lazyLoad("Dashboard"), 
  },
  {
    path: '/profile',
    name: 'Profile',
    component: lazyLoad("Profile")
  },
  {
    path: '/tutoriallist',
    name: 'TutorialsList',
    component: lazyLoad("TutorialsList")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});



export default router
