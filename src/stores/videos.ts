import { defineStore } from 'pinia';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export const useVideoStore = defineStore({
    id: 'videoStore',
    state: () => ({
        videos: [
            {
                name: 'Berlin Romance part 1',
                firebaseName: 'Berlin_Romance_1',
                src: '',
                poster: '',
            },
            {
                name: 'Berlin Romance part 2',
                firebaseName: 'Berlin_Romance_2',
                src: '',
                poster: '',
            },
        ],
    }),
    actions: {
        async fetchVideosAndPosters() {
            const storage = getStorage();

            for (let video of this.videos) {
                const videoName = `videos/${video.firebaseName}.mov`;
                const videoRef = ref(storage, videoName);
                video.src = await getDownloadURL(videoRef);

                const posterName = `videos/${video.firebaseName}.jpg`;
                const posterRef = ref(storage, posterName);
                video.poster = await getDownloadURL(posterRef);
            }
        },
    },
});
