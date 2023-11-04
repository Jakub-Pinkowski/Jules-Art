<template>
    <TheNavigation />
    <section class="main_video">
        <section class="promo_container">
            <video class="promo" :src="promo" autoplay muted ref="videoElement"></video>
            <span class="scroll"> Scroll down </span>
            <button @click="toggleMute">Icon goes here</button>
        </section>
        <section class="blocker">
            <h1>Nothing for now</h1>
        </section>
    </section>
</template>

<script setup lang="ts">
import promo from '@/assets/videos/promo.mov'
import TheNavigation from './layout/TheNavigation.vue'
import { ref } from 'vue'

// Reference to the video element
const videoElement = ref<HTMLVideoElement | null>(null)

// Function to toggle video mute state
const toggleMute = () => {
    if (videoElement.value) {
        videoElement.value.muted = !videoElement.value.muted
    }
}
</script>

<style scoped lang="scss">
.main_video {
    .promo_container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh; /* Set the height to 100vh to take up the entire viewport */
        overflow: hidden;
        z-index: 1;

        .promo {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        .scroll {
            position: absolute;
            // Should be bottom left corner of the video
            bottom: 0;
            left: 0;
            color: var(--light-gray);
            text-transform: uppercase;
            font-size: 0.8rem;
            font-weight: 700;
        }

        button {
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
    }
    .blocker {
        display: block;
        height: 80vh;
    }
}
</style>
