<template>
    <section class="view">
        <h1>Jules-Art</h1>
        <h2>Videography & Photography</h2>
        <div class="sections_container">
            <section class="about">
                <section class="text">
                    <h3>About me</h3>
                    <p>
                        {{ about_description }}
                    </p>
                    <h3>Films, Style & Aesthetics</h3>
                    <p>
                        {{ about_aesthetics }}
                    </p>
                </section>
                <section class="photo">
                    <img :src="about_photo" alt="about photo" />
                    <HomeSVG strokeColor="var(--dark-accent, #4e4e50)" />
                </section>
            </section>
            <section class="portfolio">
                <h3>Portfolio Highlights</h3>
                <ul class="portfolio_list">
                    <li v-for="view in views">
                        <h4>{{ view.name }}</h4>
                        <p>{{ view.description }}</p>
                        <img :src="view.image" alt="portfolio-image" />
                        <router-link :to="view.route">View</router-link>
                    </li>
                </ul>
            </section>
            <section class="services">
                <h3>Services</h3>
                <p>
                    {{ services_description }}
                </p>
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
import HomeSVG from '@/components/UI/HomeSVG.vue'
import ContactForm from '../components/ContactForm.vue'

const viewStore = useViewStore()
const views = viewStore.views

const about_description =
    "Hello! I'm Iuliia, a passionate self-taught videographer. I'm fascinated by the process of transforming ideas into cinematographic meaningful stories that inspire people and leave a lasting impact. I create short films, product videos, and Reels. My films convey a wide range of emotions, from love and hope to dreams and deep thoughts, all woven into the story. My permanent residence is in Berlin, Germany, but also I love to travel and shoot in other cities and countries."
const about_aesthetics =
    'My favourite style is “elegant-classy” or “romantic-nostalgic.” If I were to describe it in words- its something about the set up in beautiful location, golden light, dreamy or dramatic mood, red lipstick, little black dress. …And I am always up for experiments!'

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
        title: 'Video Editing',
        description:
            'if you have existing footage, I can edit it into a polished, professional video.',
    },
]
</script>

<style scoped lang="scss">
.view {
    .sections_container {
        .about {
            display: flex;

            .text {
                width: 50%;
                text-align: justify;
                text-justify: inter-word;
                margin-right: 2rem;
            }

            .photo {
                width: 40%;
                height: 100%;

                position: relative;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }
        }

        .portfolio {
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

                li {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    width: 30%;
                    height: 100%;
                    padding: 1rem;

                    h4 {
                        margin: 0;
                    }

                    img {
                        width: 100%;
                        height: auto;
                        margin: 1rem 0;
                    }

                    a {
                        text-decoration: none;
                        color: var(--dark-gray);
                    }
                }
            }
        }

        .services {
            ul {
                list-style: none;
                margin: 0;
                padding: 0;

                li {
                    margin: 0;
                    padding: 0;

                    h4 {
                        font-size: 1.3rem;
                        font-weight: 400;
                        margin: 0;
                    }
                }
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
