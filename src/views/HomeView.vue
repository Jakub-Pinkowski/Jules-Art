<template>
    <section class="view">
        <h1>Jules-Art</h1>
        <section class="choice-container">
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
        </section>
        <section class="about">
            <h2>About me</h2>
            <div class="about_description">
                <section class="photo">
                    <img :src="about_photo" alt="artist-photo" />
                </section>
                <section class="text">
                    <section>
                        <h3>{{ about_title }}</h3>
                        <p>
                            {{ description }}
                        </p>
                    </section>
                    <ContactForm />
                </section>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import { useViewStore } from '@/stores/views'

import about_photo from '@/assets/images/about.jpg'
import ContactForm from '../components/ContactForm.vue'

const viewStore = useViewStore()
const views = viewStore.views

const about_title = 'Artistic soul. Berlin.'
const description =
    "Photography is my passion and I would like to share my best work here. I am interested in traveling, aesthetics, and fashion photography. Recently, I've started diving into videography and I hope to share my first work soon. I will be happy to work on interesting projects and welcome all creative souls to reach out to me via social platforms or the form below."
</script>

<style scoped lang="scss">
.view {
    .choice-container {
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

    .about {
        margin-top: 2rem;
        .about_description {
            margin: 2rem;
            display: flex;
            flex-direction: row;
            .photo {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 2rem;

                img {
                    width: 500px;
                    height: auto;
                    border-radius: 3%;
                }
            }

            .text {
                margin-right: 2rem;
                display: flex;
                flex-direction: column;
                text-align: justify;

                h3 {
                    margin-bottom: 1rem;
                }

                p {
                    margin-bottom: 1rem;
                }
            }
        }
    }
}

/* Mobile */

@media screen and (max-width: 768px) {
    .choice-container {
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
