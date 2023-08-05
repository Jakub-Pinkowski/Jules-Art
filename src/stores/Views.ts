import { defineStore } from 'pinia'

import view_photos from '@/assets/views/view_photos.jpg'
import view_videos from '@/assets/views/view_videos.jpg'
import view_reels from '@/assets/views/view_reels.jpg'
import view_about from '@/assets/views/view_about.png'

export const useViewStore = defineStore({
    id: 'viewStore',
    state: () => ({
        views: [
            {
                name: 'Photos',
                route: '/photos',
                image: view_photos,
                description: 'Checkout my photos',
            },
            {
                name: 'Videos',
                route: '/videos',
                image: view_videos,
                description: 'Checkout my videos',
            },
            {
                name: 'Reels',
                route: '/reels',
                image: view_reels,
                description: 'Checkout my reels',
            },
            {
                name: 'About',
                route: '/about',
                image: view_about,
                description: 'Read more about me',
            },
        ],
    }),
})
