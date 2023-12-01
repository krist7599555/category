import { createRouter, createWebHistory } from 'vue-router'
import CategoryView from '../views/Category/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CategoryView
    }
  ]
})

export default router
