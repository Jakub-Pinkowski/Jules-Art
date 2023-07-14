import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/photos',
            name: 'photos',
            component: () => import('../views/PhotosView.vue'),
        },
        {
            path: '/videos',
            name: 'videos',
            component: () => import('../views/VideosView.vue'),
        },
        {
            path: '/reels',
            name: 'reels',
            component: () => import('../views/ReelsView.vue'),
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('../views/TestTest.vue'),
        },
        {
            // Cath all 404, redirect to home
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            redirect: '/',
        },
    ],
});

export default router;
