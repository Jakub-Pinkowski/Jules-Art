<template>
    <section id="reels">
        <div class="description">
            <h1>Reels</h1>
        </div>
        <div id="carouselVideoExample" class="carousel slide carousel-fade">
            <!-- Indicators -->
            <div class="carousel-indicators">
                <button v-for="(reel, index) in reels" :key="index" type="button" :class="{ active: index === activeIndex }"
                    @click="activeIndex = index" :aria-label="'Slide ' + (index + 1)"></button>
            </div>

            <!-- Inner -->
            <div class="carousel-inner">
                <!-- Single item -->
                <div v-for="(reel, index) in reels" :key="reel.name" class="carousel-item"
                    :class="{ active: index === activeIndex }">
                    <video class="img-fluid" autoplay loop muted>
                        <source src="@/assets/reels/reel_1.mov" type="video/mp4" />
                    </video>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ reel.name }}</h5>
                    </div>
                </div>
            </div>

            <!-- Controls -->
            <button class="carousel-control-prev" type="button" @click="prevSlide">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" @click="nextSlide">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useReelsStore } from '@/stores/reels';

const reelsStore = useReelsStore();
const reels = reelsStore.reels;

console.log(reels[0].src)

const activeIndex = ref(0);

// Carousel finctionality
const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % reels.length;
};

const prevSlide = () => {
    if (activeIndex.value === 0) {
        activeIndex.value = reels.length - 1;
    } else {
        activeIndex.value -= 1;
    }
};
</script>

<style scoped lang="scss">
#reels {
    margin: 1rem 2rem;

    .carousel-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;

        video {
            max-height: 100%;
            max-width: 100%;
            height: auto;
            width: auto;
        }
    }

    .carousel-control-prev-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
    }

    .carousel-control-next-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
    }
}
</style>