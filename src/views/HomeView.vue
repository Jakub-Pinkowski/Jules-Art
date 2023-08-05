<template>
    <section id="home" class="view">
        <ViewDescription>Jules-Art</ViewDescription>
        <div id="choice-container">
            <div
                class="choice"
                v-for="(view, index) in views.slice(0, views.length - 1)"
                :key="view.name"
            >
                <h3>{{ view.description }}</h3>
                <router-link :to="view.route">
                    <img :src="view.image" :alt="view.name" />
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useViewStore } from '@/stores/views'

const viewStore = useViewStore()
const views = viewStore.views
</script>

<style scoped lang="scss">
#home {
    #choice-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: space-between;

        .choice {
            flex: 0 0 calc(33% - 4rem);
            height: 100%;
            margin: 2rem 2rem;
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
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
                    0 3px 6px rgba(0, 0, 0, 0.23);
            }

            img:hover {
                filter: brightness(100%);
                transform: scale(1.05);
                cursor: pointer;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3),
                    0 6px 20px rgba(0, 0, 0, 0.22);
            }
        }
    }
}

/* Mobile */

@media screen and (max-width: 768px) {
    #choice-container {
        flex-direction: column !important;
        justify-content: center;
        align-items: center;
        margin: 0;
    }

    .choice {
        flex: 0 0 100%;
        width: 80%;
        height: auto;
    }

    img:hover {
        filter: brightness(80%) !important;
        transform: scale(1) !important;
    }
}
</style>
