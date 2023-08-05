import { defineStore } from 'pinia'

import reel_1 from '@/assets/reels/reel_1.mov'
import reel_2 from '@/assets/reels/reel_2.mov'
import reel_3 from '@/assets/reels/reel_3.mov'
import reel_4 from '@/assets/reels/reel_4.mov'
import reel_1_poster from '@/assets/reels/reel_1_poster.jpg'
import reel_2_poster from '@/assets/reels/reel_2_poster.jpg'
import reel_3_poster from '@/assets/reels/reel_3_poster.jpg'
import reel_4_poster from '@/assets/reels/reel_4_poster.jpg'

export const useReelsStore = defineStore({
    id: 'reelStore',
    state: () => ({
        reels: [
            {
                name: 'One evening in Paris',
                src: reel_1,
                poster: reel_1_poster,
            },
            {
                name: 'Mon Paris',
                src: reel_4,
                poster: reel_4_poster,
            },
            {
                name: 'Sunlight',
                src: reel_2,
                poster: reel_2_poster,
            },
            {
                name: 'Your scent',
                src: reel_3,
                poster: reel_3_poster,
            },
        ],
    }),
})
