import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Characters.vue')
  },
  {
    path: '/Characters',
    name: 'Characters',
    component: () => import('../components/Characters.vue')
  },
  {
    path: '/Favourites',
    name: 'Favourites',
    component: () => import('../components/Favourites.vue')
  },
  {
    path: "/Characters/:id",
    name: "Card",
    component: () => import("../components/Card.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
