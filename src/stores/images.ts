import { defineStore } from 'pinia';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export const useImageStore = defineStore({
    id: 'imageStore',
    state: () => ({
        images: [
            {
                name: 'image1',
                firebaseName: '1',
                src: '',
                row: 1,
            },
            {
                name: 'image2',
                firebaseName: '2',
                src: '',
                row: 1,
            },
            {
                name: 'image3',
                firebaseName: '3',
                src: '',
                row: 2,
            },
            {
                name: 'image4',
                firebaseName: '4',
                src: '',
                row: 2,
            },
            {
                name: 'image5',
                firebaseName: '5',
                src: '',
                row: 2,
            },
            {
                name: 'image6',
                firebaseName: '6',
                src: '',
                row: 3,
            },
            {
                name: 'image7',
                firebaseName: '7',
                src: '',
                row: 3,
            },
        ],
    }),
    actions: {
        async fetchImages() {
            const storage = getStorage();

            for (let image of this.images) {
                const imageName = `images/${image.firebaseName}.jpg`;
                const imageRef = ref(storage, imageName);
                image.src = await getDownloadURL(imageRef);
            }
        },
    },
});
