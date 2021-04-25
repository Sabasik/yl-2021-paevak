import { createWebHistory, createRouter } from 'vue-router';
import Background from './components/Background'

const routes = [
    { path: '/', component: Background },
  ]

const router = createRouter({
	history: createWebHistory(),
  routes,
});

export default router;