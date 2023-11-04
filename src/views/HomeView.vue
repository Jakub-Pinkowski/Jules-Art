<template>
    <section class="view">
        <div class="sections_container">
            <MainVideo v-if="isDesktop" />
            <About />
            <Portfolio />
            <Services />
            <Contact />
        </div>
    </section>
</template>

<script setup lang="ts">
import About from '@/components/About.vue'
import Portfolio from '@/components/Portfolio.vue'
import Services from '@/components/Services.vue'
import Contact from '@/components/Contact.vue'
import MainVideo from '@/components/MainVideo.vue'

import { computed } from 'vue'

const isDesktop = computed(() => window.innerWidth >= 769)
</script>

<style scoped lang="scss">
.view {
    margin: 0;

    .sections_container {
        margin-top: 3rem;
    }
}
</style>
