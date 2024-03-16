import { createRouter, createWebHistory } from 'vue-router'
import WishList from '../views/WishList.vue'
import FormCreate from '../components/FormCreate.vue'
const routes = [
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList,
    props: true,
  },
  {
    path: '',
    name: 'WishList',
    component: WishList,
    props: true,
  },
  {
    path: '/formcreate',
    name: 'FormCreate',
    component: FormCreate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
