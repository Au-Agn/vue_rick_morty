import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Characters.vue')
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('../components/Characters.vue')
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: () => import('../components/Favourites.vue')
  },
  {
    path: "/characters/:id",
    name: "Card",
    component: () => import("../components/Card.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
