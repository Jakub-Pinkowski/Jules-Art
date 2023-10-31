<template>
    <section class="main_video">
        <section class="promo_container">
            <video class="promo" :src="promo" autoplay muted></video>
        </section>
        <section class="text">
            <h1>Nothing for now</h1>
        </section>
    </section>
</template>

<script setup lang="ts">
import promo from '@/assets/videos/promo.mov'

// TODO: Add controls just to enable sound
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
    }
    .text{
        display: block;
        height: 100vh;
    }
}
</style>
