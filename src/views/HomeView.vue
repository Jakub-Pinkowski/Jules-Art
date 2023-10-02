<template>
    <section class="view">
        <h1>Jules-Art</h1>
        <h2>Videography & Photography</h2>
        <div class="sections_container">
            <About />
            <Portfolio />
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

// TODO: Update photos with some real ones from Julia's gallery
import service_photo_1 from '@/assets/images/services_1.jpg'
import service_photo_2 from '@/assets/images/services_2.jpg'
import contact_photo from '@/assets/images/contact.jpg'

import SocialMedia from '@/components/UI/SocialMedia.vue'
import ContactForm from '../components/ContactForm.vue'
import Portfolio from '@/components/Portfolio.vue'
import About from '@/components/About.vue'

const viewStore = useViewStore()
const views = viewStore.views

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
        title: 'Video Editing',
        description:
            'if you have existing footage, I can edit it into a polished, professional video.',
    },
    {
        title: 'Scenario writing',
        description: 'scenarios for short films 2-3 min. ',
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
