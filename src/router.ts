import { createRouter, createWebHistory } from 'vue-router'
import NotesPage from './pages/NotesPage.vue'
import AboutPage from './pages/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: NotesPage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
