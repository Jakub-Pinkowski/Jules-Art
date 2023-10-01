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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="501"
                        height="501"
                        viewBox="0 0 501 501"
                        fill="none"
                        class="overlay-svg"
                    >
                        <g filter="url(#filter0_d_102_5)">
                            <path
                                d="M147.385 479.93L147.385 479.929C90.1603 457.468 41.9742 403.063 18.9662 333.777C-3.95257 264.576 -1.57458 180.566 40.1367 115.425C81.9457 50.1815 163.226 3.66055 248.33 0.656615C333.356 -2.3478 422.26 38.0833 464.778 103.39C507.292 168.78 503.498 259.152 474.485 326.715C445.489 394.148 391.218 438.755 330.908 465.895C270.679 492.947 204.512 502.389 147.385 479.93Z"
                                stroke="#474306"
                                shape-rendering="crispEdges"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_102_5"
                                x="0"
                                y="0"
                                width="501"
                                height="501"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_102_5"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_102_5"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
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

                .overlay-svg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 105%;
                    height: 105%;
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

        .contact {
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
