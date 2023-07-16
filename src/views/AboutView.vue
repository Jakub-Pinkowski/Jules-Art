<template>
    <section id="about" class="view">
        <ViewDescription>About</ViewDescription>
        <div class="about-description">
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
</template>

<script setup lang="ts">
import about_photo from '@/assets/images/about.jpg';
import ContactForm from '../components/ContactForm.vue';

const about_title = 'Artistic soul. Berlin.';
const description =
    "Photography is my passion and I would like to share my best work here. I am interested in traveling, aesthetics, and fashion photography. Recently, I've started diving into videography and I hope to share my first work soon. I will be happy to work on interesting projects and welcome all creative souls to reach out to me via social platforms or the form below.";
</script>

<style scoped lang="scss">
#about {
    .about-description {
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .photo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;

        img {
            width: 80%;
            height: auto;
            border-radius: 3%;
        }
    }

    .text {
        margin-right: 10rem;
        flex-direction: column;
        justify-content: left;
        display: flex;
        width: 50%;
        text-align: justify;
        text-justify: inter-word;
    }

    @media screen and (max-width: 768px) {
        .about-description {
            flex-direction: column;
        }

        .photo {
            width: 100%;
            margin-bottom: 3rem;
        }

        .text {
            width: 100%;
            margin: 0 2rem;
        }
    }
}
</style>
