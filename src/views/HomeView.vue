<template>
    <section class="view">
        <h1>Jules-Art</h1>
        <h2>Videography & Photography</h2>
        <div class="main_grid">
            <section class="about">
                <h2>About me</h2>
                <section class="description">
                    <p>
                        {{ description }}
                    </p>
                </section>
                <h2>Films, Style & Aesthetics</h2>
                <section class="aesthetics">
                    <p>
                        {{ aesthetics }}
                    </p>
                </section>
            </section>
            <section class="portfolio"></section>
            <section class="services"></section>
            <ContactForm class="contact" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useViewStore } from '@/stores/views'

import about_photo from '@/assets/images/about.jpg'
import ContactForm from '../components/ContactForm.vue'

const viewStore = useViewStore()
const views = viewStore.views

const description =
    "Hello! I'm Iuliia, a passionate self-taught videographer. I'm fascinated by the process of transforming ideas into cinematographic meaningful stories that inspire people and leave a lasting impact. I create short films, product videos, and Reels. My films convey a wide range of emotions, from love and hope to dreams and deep thoughts, all woven into the story. My permanent residence is in Berlin, Germany, but also I love to travel and shoot in other cities and countries."
const aesthetics =
    'My favourite style is “elegant-classy” or “romantic-nostalgic.” If I were to describe it in words- its something about the set up in beautiful location, golden light, dreamy or dramatic mood, red lipstick, little black dress. …And I am always up for experiments!'


</script>

<style scoped lang="scss">
.view {
    .main_grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            'about portfolio'
            'services contact';
        grid-gap: 2rem;
        margin-top: 2rem;

        .about {
            grid-area: about;

            .description {
                margin-bottom: 2rem;
            }

            .aesthetics {
                margin-bottom: 2rem;
            }
        }

        .portfolio {
            grid-area: portfolio;
        }

        .services {
            grid-area: services;
        }

        .contact {
            grid-area: contact;
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
