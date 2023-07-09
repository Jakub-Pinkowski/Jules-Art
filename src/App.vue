<template>
    <TheHead />

    <body>
        <TheHeader class="desktop" />
        <TheNavigation class="mobile" />
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
import TheNavigation from '@/components/TheNavigation.vue'

</script>

<style lang="scss">
.desktop {
    display: block;
}

.mobile {
    display: none;
}

@media screen and (max-width: 768px) {
    .desktop {
        display: none;
    }

    .mobile {
        display: block;
    }

    h1 {
        margin-top: 3rem;
    }

}

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
