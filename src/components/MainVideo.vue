<template>
    <TheNavigation />
    <section class="main_video">
        <section class="promo_container">
            <video class="promo" :src="promo" autoplay loop muted ref="videoElement"></video>
            <span class="scroll"> Scroll down </span>
            <button @click="toggleMute">
                <i :class="muteIconClass"></i>
            </button>
        </section>
        <section class="blocker"></section>
    </section>
</template>

<script setup lang="ts">
import promo from '@/assets/videos/promo.mov'
import TheNavigation from './layout/TheNavigation.vue'
import { ref, computed, onMounted } from 'vue'

// Reference to the video element
const videoElement = ref<HTMLVideoElement | null>(null)

// Variable to track mute state
const isMuted = ref(false)

// Function to toggle video mute state
const toggleMute = () => {
    if (videoElement.value) {
        videoElement.value.muted = !videoElement.value.muted
        isMuted.value = videoElement.value.muted
    }
}

// Computed property to determine the icon class based on mute state
const muteIconClass = computed(() => {
    return isMuted.value ? 'fas fa-volume-mute' : 'fas fa-volume-up'
})

// Set the initial mute state on component mount
onMounted(() => {
    if (videoElement.value) {
        isMuted.value = videoElement.value.muted
    }
})
</script>

<style scoped lang="scss">
.main_video {
    .promo_container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        z-index: 1;

        .promo {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        .scroll {
            position: absolute;
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
            background: transparent;
            border: none;
            cursor: pointer;

            i {
                font-size: 2.5rem;
                color: var(--light-gray);
                animation: bounce 1s 3;
            }
        }
    }
    .blocker {
        display: block;
        height: 90vh;
    }
}

@keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}
</style>
