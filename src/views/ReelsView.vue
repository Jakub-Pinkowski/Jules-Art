<template>
    <section id="reels" class="view">
        <h1>Reels</h1>

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
                <swiper-slide v-for="reel in reversedReels" :key="reel.name">
                    <video
                        class="rounded"
                        :src="reel.src"
                        :poster="reel.poster"
                        loop
                        controls
                    ></video>
                    <span class="video-text"> {{ reel.name }}</span>
                </swiper-slide>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </swiper>
        </div>

        <!-- Mobile -->
        <div class="mobile">
            <div
                id="carouselVideoExample"
                class="carousel slide carousel-fade"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
            >
                <!-- Indicators -->
                <div class="carousel-indicators">
                    <button
                        v-for="(reel, index) in reversedReels"
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
                        v-for="(reel, index) in reversedReels"
                        :key="reel.name"
                        class="carousel-item"
                        :class="{ active: index === activeIndex }"
                    >
                        <video
                            :src="reel.src"
                            :poster="reel.poster"
                            loop
                            controls
                            playsinline
                        ></video>
                        <div class="carousel-caption">
                            <span class="reel-title">{{ reel.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useReelsStore } from '@/stores/reels'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// TODO: Reels shoudl scroll infinitely
// TODO: The page should open with reel in the middle and two other on the sides

// Import data from store
const reelsStore = useReelsStore()
const reels = reelsStore.reels
const reversedReels = reels.slice().reverse()

// Desktop
const modules = [Navigation]

// Apply inactive classes to videos
const onSlideChangeTransitionEnd = (swiper: any) => {
    const videos = Array.from(document.querySelectorAll('.desktop video')) as HTMLVideoElement[]
    videos.forEach((video, index) => {
        if (index === swiper.activeIndex) {
            video.classList.remove('inactive')
            video.setAttribute('controls', '')
        } else {
            video.classList.add('transition')
            video.classList.add('inactive')
            video.removeAttribute('controls')
            video.pause()
            video.removeAttribute('autoplay')
        }
    })
}
// Apply inactive classes to all the videos except the first one when page loads
onMounted(() => {
    const videos = Array.from(document.querySelectorAll('.desktop video')) as HTMLVideoElement[]
    videos.forEach((video, index) => {
        if (index === 0) {
            video.classList.remove('transition')
            video.classList.remove('inactive')
            video.setAttribute('controls', '')
        } else {
            video.classList.add('transition')
            video.classList.add('inactive')
            video.removeAttribute('controls')
        }
    })
})

// Mobile
const activeIndex = ref(0)

// Carousel finctionality
const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % reels.length
}

const prevSlide = () => {
    if (activeIndex.value === 0) {
        activeIndex.value = reels.length - 1
    } else {
        activeIndex.value -= 1
    }
}

// Swiping functionality
let xDown: number | null = null
let yDown: number | null = null

const getTouches = (evt: TouchEvent) => {
    return evt.touches
}

const handleTouchStart = (evt: TouchEvent) => {
    const firstTouch = getTouches(evt)[0]
    xDown = firstTouch.clientX
    yDown = firstTouch.clientY
}

const handleTouchMove = (evt: TouchEvent) => {
    if (!xDown || !yDown) {
        return
    }

    let xUp = evt.touches[0].clientX
    let yUp = evt.touches[0].clientY

    let xDiff = xDown - xUp
    let yDiff = yDown - yUp

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            nextSlide()
        } else {
            prevSlide()
        }
    } else {
        if (yDiff > 0) {
        } else {
        }
    }
    xDown = null
    yDown = null
}

const handleTouchEnd = (evt: TouchEvent) => {
    if (!xDown || !yDown) {
        return
    }
    handleTouchMove(evt)
}
</script>

<style scoped lang="scss">
.view {
    padding: 1rem 0;
    margin: 0;

    h1 {
        margin: 1rem 2rem;
    }

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

        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 400px;
            height: auto;

            img,
            video {
                display: block;
                width: 90%;
                height: auto;
                transition: filter 0.3s ease-out;
            }

            video.inactive {
                filter: blur(4px);
            }

            .video-text {
                position: absolute;
                bottom: 60px;
                left: -24px;
                width: 100%;
                text-align: center;
                color: var(--light-gray);
                font-size: 1.5rem;
                font-weight: 600;
            }
        }

        .swiper-button-next {
            color: var(--main-bg-color);
            height: 50px !important;
            width: 50px !important;
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f5f5f5' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
        }

        .swiper-button-prev {
            color: var(--main-bg-color);
            height: 50px !important;
            width: 50px !important;
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f5f5f5' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
            content: '';
        }
    }

    /* Mobile */

    .carousel-indicators {
        bottom: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        button {
            width: 35px;
            height: 4px;
            background-color: var(--light-gray);
            border: none;
            padding: 0;
            margin: 0;
            cursor: pointer;
        }

        button.active {
            background-color: var(--dark-gray);
        }
    }

    .carousel-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 85vh;

        video {
            max-height: 100%;
            max-width: 100%;
            height: auto;
            width: auto;
        }

        .carousel-caption {
            bottom: 100px;

            .reel-title {
                font-size: 1.5rem;
                font-weight: 600;
                color: var(--light-gray);
            }
        }
    }

    .carousel-control-prev-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f5f5f5' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
    }

    .carousel-control-next-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f5f5f5' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
    }
}
</style>
