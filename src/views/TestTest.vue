<template>
    <section id="reels">
        <div class="description">
            <h1>Reels</h1>
        </div>
        <!-- Slider main container -->
        <swiper
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

<script>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const modules = ref([Pagination, Navigation]);

        onMounted(() => {
            modules.value = [Pagination, Navigation];
        });

        return {
            modules,
        };
    },
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
        height: auto; /* Set height to auto */
    }

    .swiper-slide img,
    .swiper-slide video {
        display: block;
        width: 100%;
        height: auto; /* Set height to auto for videos and images */
    }

    .swiper-slide video.inactive {
        filter: grayscale(100%) blur(2px); /* Gray and blurred */
    }
}
</style>
