import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/photos',
            name: 'photos',
            component: () => import('../views/PhotosView.vue'),
        },
        {
            path: '/films',
            name: 'films',
            component: () => import('../views/FilmsView.vue'),
        },
        {
            path: '/reels',
            name: 'reels',
            component: () => import('../views/ReelsView.vue'),
        },
        // {
        //     path: '/resources',
        //     name: 'resources',
        //     component: () => import('../views/ResourcesView.vue'),
        // },
        {
            // Cath all 404, redirect to home
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            redirect: '/',
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0, behavior: 'auto' }
    },
})

export default router
