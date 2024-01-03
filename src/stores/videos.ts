import { defineStore } from 'pinia'

import berlin_romance_1 from '@/assets/videos/Berlin_Romance_1.mov'
import berlin_romance_2 from '@/assets/videos/Berlin_Romance_2.mov'
import jane from '@/assets/videos/Jane.mov'
import despair from '@/assets/videos/Despair.mov'
import wizard_tales from '@/assets/videos/Wizards_Tales.mov'
import guardian_of_klowledge from '@/assets/videos/guardian_of_knowledge.mp4'

import poster1 from '@/assets/videos/Berlin_Romance_1.jpg'
import poster2 from '@/assets/videos/Berlin_Romance_2.jpg'
import poster3 from '@/assets/videos/Jane_poster.jpg'
import poster4 from '@/assets/videos/Despair.jpg'
import poster5 from '@/assets/videos/Wizards_Tales.jpg'
import poster6 from '@/assets/videos/guardian_of_knowledge.jpg'

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
            },
            {
                name: 'Despair',
                src: despair,
                poster: poster4,
            },
            {
                name: "Wizard's Tales",
                src: wizard_tales,
                poster: poster5,
            },
            {
                name: 'Guardian of Knowledge',
                src: guardian_of_klowledge,
                poster: poster6,
            },
        ],
    }),
})
