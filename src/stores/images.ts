import { defineStore } from 'pinia';

import image1 from '@/assets/images/1.jpg';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/3.jpg';
import image4 from '@/assets/images/4.jpg';
import image5 from '@/assets/images/5.jpg';
import image6 from '@/assets/images/6.jpg';
import image7 from '@/assets/images/7.jpg';

export const useImageStore = defineStore({
    id: 'imageStore',
    state: () => ({
        images: [
            {
                name: 'image1',
                src: image1,
                row: 1,
            },
            {
                name: 'image2',
                src: image2,
                row: 1,
            },
            {
                name: 'image3',
                src: image3,
                row: 2,
            },
            {
                name: 'image4',
                src: image4,
                row: 2,
            },
            {
                name: 'image5',
                src: image5,
                row: 2,
            },
            {
                name: 'image6',
                src: image6,
                row: 3,
            },
            {
                name: 'image7',
                src: image7,
                row: 3,
            },
        ],
    }),
});
