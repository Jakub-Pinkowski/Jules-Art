<template>
    <section id="reels">
        <div class="description">
            <h1>Reels</h1>
        </div>
        <!-- Slider main container -->
        <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="3"
            :coverflowEffect="{
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }"
            :pagination="true"
            :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
            ><swiper-slide
                ><img
                    src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
            ><swiper-slide
                ><video
                    src="@/assets/reels/reel_1.mov"
                    type="video/mp4"
                    controls
                ></video> </swiper-slide
            ><swiper-slide
                ><img src="https://swiperjs.com/demos/images/nature-6.jpg"
            /></swiper-slide>
        </swiper>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCoverflow, Pagination, Navigation],
        };
    },
};
</script>

<style scoped lang="scss">
#reels {
    margin: 1rem 2rem;

    .swiper {
        width: 100%;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: auto; /* Set height to auto */
    }

    .swiper-slide img,
    .swiper-slide video {
        display: block;
        width: 100%;
        height: auto; /* Set height to auto for videos and images */
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: black;
        width: 50px;
        height: 50px;
    }
}
</style>
