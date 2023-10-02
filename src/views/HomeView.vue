<template>
    <section class="view">
        <h1>Jules-Art</h1>
        <h2>Videography & Photography</h2>
        <div class="sections_container">
            <About />
            <Portfolio />
            <Services />
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

import contact_photo from '@/assets/images/contact.jpg'

import SocialMedia from '@/components/UI/SocialMedia.vue'
import ContactForm from '../components/ContactForm.vue'
import About from '@/components/About.vue'
import Portfolio from '@/components/Portfolio.vue'
import Services from '@/components/Services.vue'

const viewStore = useViewStore()
const views = viewStore.views

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
