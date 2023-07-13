<template>
    <section id="reels">
        <h1>
            Coming soon...
        </h1>
        <div class="video_container">
            <div class="video" v-for="reel in reels" :key="reel.name">
                <video :src="reel.src" :poster="reel.poster" class="w-100 shadow-1-strong rounded mb-4" controls></video>
                <h3>{{ reel.name }}</h3>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useReelStore } from '@/stores/reels';

const reelStore = useReelStore();
const reels = reelStore.reels;

</script>

<style scoped>
#reels {
    margin: 1rem 2rem;


    video {
        width: 75%;
        height: 100%;
        margin: 2rem;

        h3 {
            display: block;
            text-align: center;
        }
    }

}
</style>