<template>
    <section id="reels">
        <div class="description">
            <h1>Reels</h1>
        </div>
        <!-- Slider main container -->
        <swiper
            ref="mySwiper"
            @slideChangeTransitionEnd="onSlideChangeTransitionEnd"
            :slidesPerView="1"
            :centeredSlides="true"
            :spaceBetween="10"
            :slideToClickedSlide="true"
            :pagination="{
                clickable: true,
            }"
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
            <swiper-slide>
                <video src="@/assets/reels/reel_1.mov" controls></video>
            </swiper-slide>
            <swiper-slide>
                <video src="@/assets/reels/reel_1.mov" controls></video>
            </swiper-slide>
            <swiper-slide>
                <video src="@/assets/reels/reel_1.mov" controls></video>
            </swiper-slide>
            <swiper-slide>
                <video src="@/assets/reels/reel_1.mov" controls></video>
            </swiper-slide>
            <swiper-slide>
                <video src="@/assets/reels/reel_1.mov" controls></video>
            </swiper-slide>
            <swiper-slide>
                <video src="@/assets/reels/reel_1.mov" controls></video>
            </swiper-slide>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </swiper>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const modules = [Pagination, Navigation];

// Apply inactive classes to videos
const onSlideChangeTransitionEnd = (swiper: any) => {
    const videos = Array.from(document.querySelectorAll('video'));
    videos.forEach((video, index) => {
        if (index === swiper.activeIndex) {
            video.classList.remove('inactive');
            video.setAttribute('controls', '');
        } else {
            video.classList.add('inactive');
            video.removeAttribute('controls');
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
</script>

<style scoped lang="scss">
#reels {
    margin: 1rem 2rem;

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
}
</style>
