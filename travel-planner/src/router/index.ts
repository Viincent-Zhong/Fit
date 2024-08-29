import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../pages/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  // Lazy loading
  { path: '/', name: 'home', component: () => import('../pages/Home/HomeView.vue') },
  { path: '/about', name: 'about', component: () => import('../pages/AboutView.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
