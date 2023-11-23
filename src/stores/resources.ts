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
                description: 'Lorem Ipsum',
            },
        ],
    }),
})
