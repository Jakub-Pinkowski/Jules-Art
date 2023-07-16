import { defineStore } from 'pinia';

import reel_1 from '@/assets/reels/reel_1.mov';
import reel_2 from '@/assets/reels/reel_2.mov';
import reel_3 from '@/assets/reels/reel_3.mov';
import reel_1_poster from '@/assets/reels/reel_1_poster.jpg';
import reel_2_poster from '@/assets/reels/reel_2_poster.jpg';
import reel_3_poster from '@/assets/reels/reel_3_poster.jpg';

export const useReelsStore = defineStore({
    id: 'reelStore',
    state: () => ({
        reels: [
            {
                name: 'Reel 1',
                src: reel_1,
                poster: reel_1_poster,
                title: 'Reel 1'            },
            {
                name: 'Reel 2',
                src: reel_2,
                poster: reel_2_poster,
                title: 'Reel 2'            },
            {
                name: 'Reel 3',
                src: reel_3,
                poster: reel_3_poster,
            },
        ],
    }),
});
