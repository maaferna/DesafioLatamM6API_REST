import { createRouter, createWebHistory } from 'vue-router'
import UserComponent from '../components/UserComponent.vue'
import ChatComponent from '../components/ChatComponent.vue'

const routes = [
  {
    path: '/',
    name: 'user',
    component: UserComponent,
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatComponent,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

