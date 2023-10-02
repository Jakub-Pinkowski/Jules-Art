<template>
    <section class="contact">
        <div class="photo">
            <img :src="contact_photo" alt="contact photo" />
        </div>
        <section class="contact_container">
            <h3>Contact me</h3>
            <p>
                Ready to collaborate? I'd love to hear about your project and how we can bring it to
                life
            </p>
            <div class="forms_container">
                <div class="contact_form">
                    <span>P.S. It goes straight to email box, and I read it every day!</span>
                    <ContactForm />
                </div>
                <div class="email_form">
                    <p>Let's connect on Social Media</p>
                    <div class="social_media">
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import contact_photo from '@/assets/images/contact.jpg'

import SocialMedia from '@/components/UI/SocialMedia.vue'
import ContactForm from '@/components/ContactForm.vue'
</script>

<style scoped lang="scss">
.contact {
    background-color: var(--light-gray);
    display: flex;
    margin: 0;
    padding-top: 5rem;
    padding-bottom: 5rem;

    .contact_container {
        width: 40%;
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
        width: 60%;
        margin-top: 2rem;
        margin-left: 2rem;
        margin-right: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        img {
            width: 100%;
            height: auto;
            border-radius: 5%;
            object-fit: cover;
        }
    }
}

/* Mobile */
@media screen and (max-width: 768px) {
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
</style>
