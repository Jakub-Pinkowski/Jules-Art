<template>
    <section id="about">
        <div class="description">
            <h1>About</h1>
        </div>
        <div class="about_description">
            <section class="photo">
                <img src="../assets/images/about.jpg" alt="artist-photo" />
            </section>
            <section class="text">
                <section>
                    <h3>Artistic soul. Berlin.</h3>
                    <p>
                        Photography is my passion and I would like to share my best
                        work here. I am interested in traveling, aesthetics, and
                        fashion photography. Recently, I've started diving into
                        videography and I hope to share my first work soon. I will
                        be happy to work on interesting projects and welcome all
                        creative souls to reach out to me via social platforms or the form below.
                    </p>
                </section>
                <ContactForm />
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import ContactForm from '../components/ContactForm.vue'
</script>

<style scoped lang="scss">
#about {

    margin: 1rem 2rem;

    .about_description {
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
        flex-direction: column;
        justify-content: left;
        display: flex;
        width: 60%;
        text-align: justify;
        text-justify: inter-word;

    }

    @media screen and (max-width: 768px) {
        .about_description {
            flex-direction: column;
        }

        .photo {
            width: 100%;
            margin-bottom: 3rem;
        }

        .text {
            width: 100%;
        }

    }
}
</style>