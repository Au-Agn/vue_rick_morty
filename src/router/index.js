import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Characters.vue')
  },
  {
    path: '/Characters',
    name: 'Characters',
    component: () => import('../views/Characters.vue')
  },
  {
    path: '/Favourites',
    name: 'Favourites',
    component: () => import('../views/Favourites.vue')
  },
  {
    path: "/Characters/:id",
    name: "Card",
    component: () => import("../views/Card.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
