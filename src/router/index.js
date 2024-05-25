import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Kalkulator',
      name: 'calculator',
      component: () => import('../views/KalkulatorView.vue')
    },
    {
      path: '/Nilai',
      name: 'halaman nilai',
      component: () => import('../views/NilaiView.vue')
    },
    {
      path: '/TokoBaju',
      name: 'L4ZY',
      component: () => import('../views/TokoBajuView.vue')
    }
  ]
})

export default router
