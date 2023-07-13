import { defineStore } from 'pinia';

import reel_1 from '@/assets/reels/Reel_1.mov';
import reel_2 from '@/assets/reels/Reel_2.mov';
import reel_3 from '@/assets/reels/Reel_1.mov';

export const useReelsStore = defineStore({
    id: 'reelStore',
    state: () => ({
        reels: [
            {
                name: 'Reel 1',
                src: reel_1,
                poster: reel_1,
            },
            {
                name: 'Reel 2',
                src: reel_2,
                poster: reel_2,
            },
            {
                name: 'Reel 3',
                src: reel_3,
                poster: reel_3,
            },
        ],
    }),
});
