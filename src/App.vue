<template>
    <div class="body">
        <TheHeader class="desktop" />
        <TheNavigation class="mobile" />
        <main>
            <router-view v-slot="{ Component }">
                <transition name="slide-blur" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>
        <TheFooter />
    </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import TheNavigation from '@/components/layout/TheNavigation.vue'
</script>

<style lang="scss">
/* Desktop vs Mobile */
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

/* Global styles */

.body {
    display: flex;
    flex-direction: column;
    // turn off horizontal scrolling for the whole website
    overflow-x: hidden;
}

h1 {
    color: var(--dark-gray);
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

h2 {
    color: var(--dark-gray);
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 2rem;
}

h3 {
    color: var(--dark-gray);
    font-size: 1.7rem;
    font-weight: 400;
    margin-bottom: 2rem;
}

h4 {
    color: var(--dark-gray);
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
}

p {
    color: var(--dark-gray);
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 1rem;
}

.view {
    margin: 1rem 2rem;
}

/* Transition between views */

.slide-blur-enter-active {
    transition: all 0.3s ease;
}

.slide-blur-leave-active {
    transition: all 0.3s ease-in-out;
}

.slide-blur-enter {
    transform: translateX(-10px);
    filter: blur(2px);
    opacity: 0;
}

.slide-blur-leave-to {
    transform: translateX(10px);
    filter: blur(2px);
    opacity: 0;
}
</style>
