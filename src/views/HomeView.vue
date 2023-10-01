<template>
    <section class="view">
        <h1>Jules-Art</h1>
        <h2>Videography & Photography</h2>
        <div class="sections_container">
            <section class="about main_section">
                <section class="text">
                    <div class="about_me">
                        <h3>About me</h3>
                        <p>
                            {{ about_description }}
                        </p>
                    </div>
                    <div class="aesthetics">
                        <h3>Films, Style & Aesthetics</h3>
                        <p>
                            {{ about_aesthetics }}
                        </p>
                    </div>
                </section>
                <section class="photo">
                    <img :src="about_photo" alt="about photo" />
                    <HomeSVG strokeColor="var(--dark-accent, #4e4e50)" />
                </section>
            </section>
            <section class="portfolio main_section">
                <h3>Portfolio Highlights</h3>
                <ul class="portfolio_list">
                    <li v-for="view in views">
                        <h4>{{ view.name }}</h4>
                        <p>{{ view.description }}</p>
                        <router-link :to="view.route">
                            <img :src="view.image" :alt="view.name" />
                        </router-link>
                    </li>
                </ul>
            </section>
            <section class="services main_section">
                <h3>Services</h3>
                <p>
                    {{ services_description }}
                </p>
                <ul class="services_list">
                    <li v-for="item in services">
                        <div class="service-item">
                            <i class="fa-solid fa-caret-right"></i>
                            <h4>{{ item.title }}</h4>
                        </div>
                        <p>{{ item.description }}</p>
                    </li>
                </ul>
            </section>
            <section class="contact main_section">
                <div class="contact_container">
                    <h3>Contact me</h3>
                    <p>
                        Ready to collaborate? I'd love to hear about your project and how we can
                        bring it to life
                    </p>
                    <div class="forms_container">
                        <div class="contact_form">
                            <span
                                >P.S. It goes straight to email box, and I read it every day!</span
                            >
                            <ContactForm />
                        </div>
                        <div class="email_form">
                            <p>You can also drop me an email or connect via Social Media</p>
                            <a :href="'mailto:' + email">{{ email }}</a>
                            <div class="social_media">
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useViewStore } from '@/stores/views'

import about_photo from '@/assets/images/about.jpg'
import HomeSVG from '@/components/UI/HomeSVG.vue'
import HomeSVG_2 from '@/components/UI/HomeSVG_2.vue'
import SocialMedia from '@/components/UI/SocialMedia.vue'
import ContactForm from '../components/ContactForm.vue'

const viewStore = useViewStore()
const views = viewStore.views

const about_description =
    "Hello! I'm Iuliia, a passionate self-taught videographer. I'm fascinated by the process of transforming ideas into cinematographic meaningful stories that inspire people and leave a lasting impact. I create short films, product videos, and Reels. My films convey a wide range of emotions, from love and hope to dreams and deep thoughts, all woven into the story. My permanent residence is in Berlin, Germany, but also I love to travel and shoot in other cities and countries."
const about_aesthetics =
    "My favourite style is “elegant-classy” or “romantic-nostalgic.” If I were to describe it in words - it's something about the set up in beautiful location, golden light, dreamy or dramatic mood, red lipstick, little black dress. I am always up for experiments!"

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

const email = 'iu.matiash@gmail.com'
</script>

<style scoped lang="scss">
.view {
    margin: 0;

    h1,
    h2 {
        margin: 1rem 2rem;
    }

    .sections_container {
        .main_section {
            margin: 1rem 2rem;
        }
        .about {
            display: flex;
            margin-bottom: 0;

            .text {
                width: 50%;
                text-align: justify;
                text-justify: inter-word;
                margin-right: 2rem;

                .about_me {
                    margin-bottom: 2rem;
                }

                .aesthetics {
                    margin-bottom: 2rem;
                }
            }

            .photo {
                justify-content: center;
                text-align: center;

                width: 50%;
                height: 100%;
                position: relative;

                img {
                    width: 65%;
                    height: 65%;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }
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

        .services {
            margin-top: 5rem;
            margin-bottom: 5rem;
            width: 50%;
            text-align: justify;

            ul {
                list-style: none;
                margin-top: 2rem;
                margin-right: 2rem;
                padding: 0;

                li {
                    margin-right: 1rem;
                    margin-top: 2rem;
                    align-items: center;

                    .service-item {
                        display: flex;
                        align-items: center;
                        margin-right: 1rem;
                        margin-top: 2rem;
                        margin-bottom: 0.5rem;

                        i {
                            font-size: 1.5rem;
                            margin-right: 1rem;
                        }

                        h4 {
                            margin: 0;
                        }

                        p {
                            font-size: 1.2rem;
                        }
                    }
                }
            }
        }

        .contact {
            background-color: var(--light-gray);
            margin: 0;
            padding-top: 5rem;
            padding-bottom: 5rem;

            .contact_container {
                margin-bottom: 2rem;
                margin-left: 2rem;

                .forms_container {
                    justify-content: center;
                    align-items: center;

                    .contact_form {
                        span {
                            font-size: 1rem;
                            font-weight: 300;
                            margin: 0;
                        }
                    }

                    .email_form {
                        margin-top: 1rem;

                        a {
                            color: var(--dark-accent);
                            text-decoration: none;
                            font-size: 1.3rem;
                            font-weight: 400;
                            margin-bottom: 3rem;
                        }

                        .social_media {
                            margin-top: 1rem;
                        }

                        .final_message {
                            margin-top: 2rem;
                        }
                    }
                }
            }
        }
    }
}

/* Mobile */
</style>
