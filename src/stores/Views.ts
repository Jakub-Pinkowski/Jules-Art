import { defineStore } from 'pinia';

import view_about from '@/assets/images/view_about.png';
import view_photos from '@/assets/images/3.jpg';
import view_videos from '@/assets/images/view_videos.jpg';
import view_reels from '@/assets/images/2.jpg';

export const useViewStore = defineStore({
    id: 'viewStore',
    state: () => ({
        views: [
            {
                name: 'photos',
                route: '/photos',
                image: view_photos,
                description: 'Checkout my photos',
            },
            {
                name: 'videos',
                route: '/videos',
                image: view_videos,
                description: 'Checkout my videos',
            },
            {
                name: 'reels',
                route: '/reels',
                image: view_reels,
                description: 'Checkout my reels',
            },
            {
                name: 'about',
                route: '/about',
                image: view_about,
                description: 'Read more about me',
            },
        ],
    }),
});
