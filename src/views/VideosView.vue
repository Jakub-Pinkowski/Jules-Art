<template>
    <section id="videos" class="view">
        <ViewDescription>Videos</ViewDescription>
        <div class="video_container">
            <div class="video" v-for="video in videos" :key="video.name">
                <video
                    :src="video.src"
                    :poster="video.poster"
                    class="w-100 shadow-1-strong rounded mb-4"
                    controls
                ></video>
                <h3>{{ video.name }}</h3>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useVideoStore } from '@/stores/videos';

const videoStore = useVideoStore();
const videos = videoStore.videos;
</script>

<style scoped lang="scss">
#videos {
    .video_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        width: 100%;
        height: 100%;

        .video {
            width: 75%;
            height: 100%;
            margin: 2rem;

            h3 {
                font-size: 1.3rem;
                font-weight: 600;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .video {
        width: 100% !important;
    }
}
</style>
