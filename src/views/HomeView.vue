<template>
    <section class="view">
        <h1>Jules-Art</h1>
        <h2>Videography & Photography</h2>
        <div class="sections_container">
            <MainVideo />
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
</script>

<style scoped lang="scss">
.view {
    margin: 0;

    h1,
    h2 {
        margin: 1rem 2rem;
    }

    .sections_container {
        margin-top: 3rem;
    }
}
</style>
