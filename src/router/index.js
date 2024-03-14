import { createRouter, createWebHistory } from 'vue-router'
import WishList from '../views/WishList.vue'

const routes = [
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path: '',
    name: 'WishList',
    component: WishList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
