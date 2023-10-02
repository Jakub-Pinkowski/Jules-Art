<template>
    <section class="portfolio main_section">
        <h3>Portfolio Highlights</h3>
        <ul class="portfolio_list">
            <li v-for="view in views">
                <h4>{{ view.name }}</h4>
                <p>{{ view.description }}</p>
                <router-link :to="view.route">
                    <img :src="view.image" :alt="view.name" />
                </router-link>
                <router-link :to="view.route">
                    <button class="btn btn-sm">View</button>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { useViewStore } from '@/stores/views'

const viewStore = useViewStore()
const views = viewStore.views
</script>

<style scoped lang="scss">
.main_section {
    margin: 1rem 2rem;
}
.portfolio {
    background-color: var(--light-gray);
    margin: 0;
    padding-top: 5rem;
    padding-bottom: 5rem;

    h3 {
        margin-bottom: 2rem;
        margin-left: 2rem;
    }

    .portfolio_list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        list-style: none;

        li {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 30%;
            height: 100%;
            padding: 1rem;

            button {
                background-color: var(--light-gray);
                margin-top: 3rem;
                width: 200px;
                border: 1px solid var(--dark-accent);
                color: var(--main-bg-color);
                transition: background-color 0.5s ease;
                transition: transform 0.3s ease-in-out;
            }

            button:hover {
                border: 1px solid var(--dark-accent);
                background-color: var(--light-accent);
            }

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
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.22);
            }
        }
    }
}

/* Mobile */

@media screen and (max-width: 768px) {
    .portfolio {
        padding-top: 2rem;
        padding-bottom: 2rem;

        .portfolio_list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 0;

            li {
                width: 100%;
                height: 100%;
                padding: 1rem;

                button {
                    margin-top: 1rem;
                    height: 50px;
                    width: 200px;
                }

                button:hover {
                    transform: scale(1);
                }

                img {
                    width: 100%;
                    height: auto;
                    border-radius: 5%;
                    filter: brightness(80%);
                    transition: all 0.3s ease-in-out;
                }

                img:hover {
                    filter: brightness(100%);
                    transform: scale(1);
                    box-shadow: none;
                }
            }
        }
    }
}
</style>
