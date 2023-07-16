<template>
    <section id="reels">
        <div class="description">
            <h1>Reels</h1>
        </div>

        <!-- Desktop -->
        <div class="desktop">
            <swiper
                ref="mySwiper"
                @slideChangeTransitionEnd="onSlideChangeTransitionEnd"
                :slidesPerView="1"
                :centeredSlides="true"
                :spaceBetween="10"
                :slideToClickedSlide="true"
                :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }"
                :breakpoints="{
                    '768': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '1024': {
                        slidesPerView: 3,
                        spaceBetween: 120,
                    },
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for="reel in reels">
                    <video
                        class="rounded"
                        :src="reel.src"
                        :poster="reel.poster"
                        controls
                    ></video>
                    <span class="video-text"> {{ reel.title }}</span>
                </swiper-slide>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </swiper>
        </div>

        <!-- Mobile -->
        <div class="mobile">
            <div id="carouselVideoExample" class="carousel slide carousel-fade">
                <!-- Indicators -->
                <div class="carousel-indicators">
                    <button
                        v-for="(reel, index) in reels"
                        :key="index"
                        type="button"
                        :class="{ active: index === activeIndex }"
                        @click="activeIndex = index"
                        :aria-label="'Slide ' + (index + 1)"
                    ></button>
                </div>

                <!-- Inner -->
                <div class="carousel-inner">
                    <!-- Single item -->
                    <div
                        v-for="(reel, index) in reels"
                        :key="reel.name"
                        class="carousel-item"
                        :class="{ active: index === activeIndex }"
                    >
                        <video class="img-fluid" autoplay loop muted>
                            <source :src="reel.src" type="video/mp4" />
                        </video>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{{ reel.name }}</h5>
                        </div>
                    </div>
                </div>

                <!-- Controls -->
                <button
                    class="carousel-control-prev"
                    type="button"
                    @click="prevSlide"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    @click="nextSlide"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useReelsStore } from '@/stores/reels';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import data from store
const reelsStore = useReelsStore();
const reels = reelsStore.reels;

// Desktop
const modules = [Navigation];

// Apply inactive classes to videos
const onSlideChangeTransitionEnd = (swiper: any) => {
    const videos = Array.from(document.querySelectorAll('video'));
    videos.forEach((video, index) => {
        if (index === swiper.activeIndex) {
            video.classList.remove('inactive');
            video.setAttribute('controls', '');
            if (index === Math.floor(swiper.slides.length / 2)) {
                video.play();
            }
        } else {
            video.classList.add('inactive');
            video.removeAttribute('controls');
            video.pause();
        }
    });
};
// Apply inactive classes to all the videos except the first one when page loads
onMounted(() => {
    const videos = Array.from(document.querySelectorAll('video'));
    videos.forEach((video, index) => {
        if (index === 0) {
            video.classList.remove('inactive');
            video.setAttribute('controls', '');
        } else {
            video.classList.add('inactive');
            video.removeAttribute('controls');
        }
    });
});

// Mobile
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
    }

    /* Desktop */
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 400px;
        height: auto;
    }

    .swiper-slide img,
    .swiper-slide video {
        display: block;
        width: 100%;
        height: auto;
    }
    .swiper-slide video.inactive {
        filter: grayscale(100%) blur(2px);
    }

    .video-text {
        position: absolute;
        bottom: 15px;
        width: 100%;
        text-align: center;
        color: var(--light-gray);
        font-size: 1.5rem;
        font-weight: 600;
    }

    .swiper-button-next {
        color: var(--main-bg-color);
        height: 50px !important;
        width: 50px !important;
    }

    .swiper-button-prev {
        color: var(--main-bg-color);
        height: 50px !important;
        width: 50px !important;
    }

    .swiper-button-prev {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f5f5f5' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
    }

    .swiper-button-next {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f5f5f5' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
        content: '';
    }

    /* Mobile */

    .carousel-indicators {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .carousel-indicators button {
        width: 35px;
        height: 4px;
        background-color: var(--light-gray);
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }

    .carousel-indicators button.active {
        background-color: var(--dark-gray);
    }

    .carousel-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;

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
