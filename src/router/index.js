import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ProfilePage from '@/views/ProfilePage.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/profile', component: ProfilePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
