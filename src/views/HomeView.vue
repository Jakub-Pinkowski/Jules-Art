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
                        <router-link :to="view.route">
                            <button class="btn btn-sm">View</button>
                        </router-link>
                    </li>
                </ul>
            </section>
            <section class="services main_section">
                <section class="text">
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
                <section class="photos">
                    <img :src="service_photo_1" alt="service photo 1" />
                    <img :src="service_photo_2" alt="service photo 2" />
                </section>
            </section>
            <section class="contact main_section">
                <div class="photo">
                    <img :src="contact_photo" alt="contact photo" />
                </div>
                <section class="contact_container">
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
                </section>
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useViewStore } from '@/stores/views'

import about_photo from '@/assets/images/about.jpg'
// TODO: Update photos with some real ones from Julia's gallery
import service_photo_1 from '@/assets/images/services_1.jpg'
import service_photo_2 from '@/assets/images/services_2.jpg'
import contact_photo from '@/assets/images/contact.jpg'

import HomeSVG from '@/components/UI/HomeSVG.vue'
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
        margin-top: 3rem;

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
                        transform: scale(1.1);
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

        .services {
            margin-top: 5rem;
            margin-bottom: 5rem;
            display: flex;
            text-align: justify;

            .text {
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

            .photos {
                width: 50%;
                margin-top: 2rem;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                img {
                    width: 48%;
                    height: auto;
                    border-radius: 5%;
                    object-fit: cover;
                }
            }
        }

        .contact {
            background-color: var(--light-gray);
            display: flex;
            margin: 0;
            padding-top: 5rem;
            padding-bottom: 5rem;

            .contact_container {
                width: 50%;
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

            .photo {
                width: 50%;
                margin-top: 2rem;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                img {
                    width: 90%;
                    height: auto;
                    border-radius: 5%;
                    object-fit: cover;
                }
            }
        }
    }
}

/* Mobile */

@media screen and (max-width: 768px) {
    .view {
        margin: 0;

        .sections_container {
            .about {
                flex-direction: column;

                .photo {
                    width: 100%;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                    order: 1;
                }
                .text {
                    width: 100%;
                    margin-right: 0;
                    order: 2;
                }
            }

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

            .services {
                margin-top: 2rem;
                margin-bottom: 2rem;
                flex-direction: column;

                .text {
                    ul {
                        margin-right: 0;
                    }
                }

                .photos {
                    width: 100%;
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    img {
                        width: 45%;
                        height: auto;
                        border-radius: 5%;
                        object-fit: cover;
                    }
                }
            }

            .contact {
                padding-top: 2rem;
                padding-bottom: 2rem;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .contact_container {
                    width: 90%;
                    margin: 2rem;

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

                .photo {
                    width: 100%;
                    margin-top: 2rem;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;

                    img {
                        width: 90%;
                        height: auto;
                        border-radius: 5%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
}
</style>
