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
import { useViewStore } from '@/stores/Views';

const viewStore = useViewStore();
const views = viewStore.views;
</script>

<style scoped lang="scss">
#home {
    margin: 1rem 2rem;

    #choice_container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: space-between;

        .choice {
            flex: 0 0 calc(45% - 4rem);
            height: 100%;
            margin: 1rem 2rem;
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