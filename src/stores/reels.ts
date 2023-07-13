import { defineStore } from 'pinia';

import reel_1 from '@/assets/reels/Reel_1.mov';

export const useReelStore = defineStore({
    id: 'reelStore',
    state: () => ({
        reels: [
            {
                name: 'Reel 1',
                src: reel_1,
                poster: reel_1,
            },
        ],
    }),
});
