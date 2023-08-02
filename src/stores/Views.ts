import { defineStore } from 'pinia';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import view_photos from '@/assets/views/view_photos.jpg';
import view_videos from '@/assets/views/view_videos.jpg';
import view_reels from '@/assets/views/view_reels.jpg';
import view_about from '@/assets/views/view_about.png';

export const useViewStore = defineStore({
    id: 'viewStore',
    state: () => ({
        views: [
            {
                name: 'Photos',
                route: '/photos',
                image: '',
                description: 'Checkout my photos',
            },
            {
                name: 'Videos',
                route: '/videos',
                image: '',
                description: 'Checkout my videos',
            },
            {
                name: 'Reels',
                route: '/reels',
                image: '',
                description: 'Checkout my reels',
            },
            {
                name: 'About',
                route: '/about',
                image: '',
                description: 'Read more about me',
            },
        ],
    }),
    actions: {
        async fetchImages() {
            const storage = getStorage();

            for (let view of this.views) {
                const imageName = `view_${view.name.toLowerCase()}.${
                    view.name === 'About' ? 'png' : 'jpg'
                }`;
                const imageRef = ref(storage, `views/${imageName}`);
                view.image = await getDownloadURL(imageRef);
            }
        },
    },
});
