import { defineStore } from 'pinia'

import view_photos from '@/assets/views/view_photos.jpg'
import view_videos from '@/assets/views/view_videos.jpg'
import view_reels from '@/assets/views/view_reels.jpg'
import view_resources from '@/assets/views/view_resources.jpg'

export const useViewStore = defineStore({
    id: 'viewStore',
    state: () => ({
        views: [
            {
                name: 'Photos',
                route: '/photos',
                image: view_photos,
                description: 'Explore a colection of photos',
            },
            {
                name: 'Videos',
                route: '/videos',
                image: view_videos,
                description: 'Explore a collection of short films',
            },
            {
                name: 'Reels',
                route: '/reels',
                image: view_reels,
                description: 'Explore a collection of Reels',
            },
            {
                name: 'Resources',
                route: '/resources',
                image: view_resources,
                description: 'Explore guides & tips',
            }
        ],
    }),
})
