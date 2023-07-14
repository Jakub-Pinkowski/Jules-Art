<template>
    <section id="reels">
        <div class="description">
            <h1>Reels</h1>
        </div>
        <!-- Slider main container -->
        <swiper
            ref="mySwiper"
            @slideChange="onSlideChange"
            @transitionEnd="removeControls"
            :slidesPerView="1"
            :centeredSlides="true"
            :spaceBetween="10"
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

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const modules = [Pagination, Navigation];

// Apply inactive classes to videos
const onSlideChange = (swiper: any) => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
        video.classList.add('inactive');
    });
    videos[swiper.activeIndex].classList.remove('inactive');
};

// Apply inactive classes to all the videos except the first one when page loads
onMounted(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
        video.classList.add('inactive');
    });
    videos[0].classList.remove('inactive');
});

// remove controls from all the videos with class inactive
const removeControls = () => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
        if (video.classList.contains('inactive')) {
            video.removeAttribute('controls');
        }
    });
};
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
