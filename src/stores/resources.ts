import { defineStore } from 'pinia'

import dummy from '@/assets/resources/dummy.pdf'
import dummy_image from '@/assets/resources/dummy.jpg'

export const useResourceStore = defineStore({
    id: 'resourceStore',
    state: () => ({
        resources: [
            {
                name: 'Storyboard',
                src: dummy,
                image: dummy_image,
                description:
                    ' Storyboard is a graphic organizer that consists of illustrations or images displayed in sequence for the purpose of pre-visualizing a motion picture, animation, motion graphic or interactive media sequence',
            },
        ],
    }),
})
