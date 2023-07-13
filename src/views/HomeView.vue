<template>
    <section id="home">
        <div class="description">
            <h1>Jules-Art</h1>
        </div>
        <div id="choice_container">
            <div class="choice" v-for="view in views">
                <h3> {{ view.description }}</h3>
                <router-link :to="view.route">
                    <img :src="view.image" alt="about">
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import view_about from '@/assets/images/view_about.png';
import view_photos from '@/assets/images/4.jpg';
import view_videos from '@/assets/images/view_videos.jpg';
import view_reels from '@/assets/images/2.jpg';

const views = [
    {
        name: 'about',
        route: '/about',
        image: view_about,
        description: 'Read more about me',
    },
    {
        name: 'photos',
        route: '/photos',
        image: view_photos,
        description: 'Checkout my photos',
    },
    {
        name: 'videos',
        route: '/videos',
        image: view_videos,
        description: 'Checkout my videos',
    },
    {
        name: 'reels',
        route: '/reels',
        image: view_reels,
        description: 'Checkout my reels',
    },
];

</script>

<style scoped lang="scss">
#home {
    margin: 1rem 2rem;

    #choice_container {
        display: flex;

        .choice {
            width: 33%;
            height: 100%;
            margin: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                height: auto;
                border-radius: 5%;
                filter: brightness(80%);
                transition: all 0.3s ease-in-out;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

            }

            img:hover {
                filter: brightness(100%);
                transform: scale(1.05);
                cursor: pointer;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.30), 0 6px 20px rgba(0, 0, 0, 0.22);
            }
        }
    }
}

@media screen and (max-width: 768px) {
    #choice_container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
    }

    .choice {
        width: 80% !important;
        height: auto;
    }
}
</style>