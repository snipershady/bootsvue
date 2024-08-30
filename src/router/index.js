import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue';
import PostComponent from '@/components/PostComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post',
      name: 'post',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PostComponent
    }
  ]
})

export default router
