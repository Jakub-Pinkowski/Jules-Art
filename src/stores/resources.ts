import { defineStore } from 'pinia'

import dummy from '@/assets/resources/dummy.pdf'

export const useResourceStore = defineStore({
    id: 'resourceStore',
    state: () => ({
        resources: [
            {
                name: 'Storyboard',
                src: dummy,
                description: 'Lorem Ipsum',
            },
        ],
    }),
})
