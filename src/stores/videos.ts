import { defineStore } from 'pinia'

import berlin_romance_1 from '@/assets/videos/Berlin_Romance_1.mov'
import berlin_romance_2 from '@/assets/videos/Berlin_Romance_2.mov'
import jane from '@/assets/videos/Jane.mov'
import poster1 from '@/assets/videos/Berlin_Romance_1.jpg'
import poster2 from '@/assets/videos/Berlin_Romance_2.jpg'
import poster3 from '@/assets/videos/Jane_poster.jpg'

export const useVideoStore = defineStore({
    id: 'videoStore',
    state: () => ({
        videos: [
            {
                name: 'Berlin Romance part 2',
                src: berlin_romance_2,
                poster: poster2,
            },
            {
                name: 'Berlin Romance part 1',
                src: berlin_romance_1,
                poster: poster1,
            },

            {
                name: 'Jane & Inspiration',
                src: jane,
                poster: poster3,
            }
        ],
    }),
})
