<template>
    <section class="view">
        <h1>Jules-Art</h1>
        <h2>Videography & Photography</h2>
        <div class="main_grid">
            <section class="about">
                <h3>About me</h3>
                <p>
                    {{ description }}
                </p>
                <h3>Films, Style & Aesthetics</h3>
                <p>
                    {{ aesthetics }}
                </p>
            </section>
            <section class="portfolio">
                <h3>Portfolio Highlights</h3>
                <ul class="portfolio_list">
                    <li v-for="item in portfolio">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.description }}</p>
                        <img :src="item.image" alt="portfolio-image" />
                    </li>
                </ul>
            </section>
            <section class="services">
                <h3>Services</h3>
                <span>
                    {{ services_description }}
                </span>
                <ul>
                    <li v-for="item in services">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.description }}</p>
                    </li>
                </ul>
            </section>
            <section class="contact">
                <h3>Contact me</h3>
                <ContactForm />
            </section>
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

const portfolio = [
    {
        title: 'Short Films',
        description: 'Explore a collection of Short films here',
        image: 'https://picsum.photos/200/300',
    },
    {
        title: 'Reels',
        description: 'Explore a collection of Reels here',
        image: 'https://picsum.photos/200/300',
    },
    {
        title: 'Photography',
        description: 'Explore a collection photo here',
        image: 'https://picsum.photos/200/300',
    },
]

const services_description =
    'Looking for a videographer for your next project? I offer a range of services, including:'

const services = [
    {
        title: 'Short Film Production',
        description: 'from concept to post-production.',
    },
    {
        title: 'Promotional Videos',
        description:
            'creation of promotional videos for products like: cosmetics, clothes, books, and all you can think about!',
    },
    {
        title: 'Scenario writing',
        description: 'scenarios for short films 2-3 min. ',
    },
    {
        ttle: 'Video Editing',
        description:
            'if you have existing footage, I can edit it into a polished, professional video.',
    },
]
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
        gap: 1rem;
        margin: 2rem 0;

        .about {
            grid-area: about;
        }

        .portfolio {
            grid-area: portfolio;

            h3 {
                margin: 0;
            }

            .portfolio_list {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 100%;
                list-style: none;
            }
        }

        .contact {
            grid-area: contact;
        }

        .services {
            grid-area: services;

            ul {
                list-style: none;
            }
        }
    }
}

/* Mobile */

@media screen and (max-width: 768px) {
    .main_grid {
        grid-template-columns: 1fr; /* Single column for mobile */
    }
}
</style>
