<template>
    <TheHead />

    <body>
        <TheHeader />
        <main>
            <router-view></router-view>
        </main>
        <TheFooter />
    </body>
</template>

<script setup lang="ts">
import TheHead from '@/components/TheHead.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

</script>

<style lang="scss">
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

h1 {
    color: var(--dark-gray);
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

h2 {
    color: var(--gray);
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 2rem;
}

h3 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 2rem;
}

p {
    font-size: 1.3rem;
    font-weight: 300;
    margin-bottom: 2rem;
}
</style>
