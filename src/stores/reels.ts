import { defineStore } from 'pinia';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export const useReelsStore = defineStore({
    id: 'reelStore',
    state: () => ({
        reels: [
            {
                name: 'One evening in Paris',
                firebaseName: 'reel_1',
                src: '',
                poster: '',
            },
            {
                name: 'Mon Paris',
                firebaseName: 'reel_4',
                src: '',
                poster: '',
            },
            {
                name: 'Sunlight',
                firebaseName: 'reel_2',
                src: '',
                poster: '',
            },
            {
                name: 'Your scent',
                firebaseName: 'reel_3',
                src: '',
                poster: '',
            },
        ],
    }),
    actions: {
        async fetchReelsAndPosters() {
            const storage = getStorage();

            for (let reel of this.reels) {
                const reelName = `reels/${reel.firebaseName}.mov`;
                const reelRef = ref(storage, reelName);
                reel.src = await getDownloadURL(reelRef);

                const posterName = `reels/${reel.firebaseName}_poster.jpg`;
                const posterRef = ref(storage, posterName);
                reel.poster = await getDownloadURL(posterRef);
            }
        },
    },
});
