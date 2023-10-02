<template>
    <section class="about">
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
</template>

<script setup lang="ts">
import about_photo from '@/assets/images/about.jpg'
import HomeSVG from '@/components/UI/HomeSVG.vue'

const about_description =
    "Hello! I'm Iuliia, a passionate self-taught videographer. I'm fascinated by the process of transforming ideas into cinematographic meaningful stories that inspire people and leave a lasting impact. I create short films, product videos, and Reels. My films convey a wide range of emotions, from love and hope to dreams and deep thoughts, all woven into the story. My permanent residence is in Berlin, Germany, but also I love to travel and shoot in other cities and countries."
const about_aesthetics =
    "My favourite style is “elegant-classy” or “romantic-nostalgic.” If I were to describe it in words - it's something about the set up in beautiful location, golden light, dreamy or dramatic mood, red lipstick, little black dress. I am always up for experiments!"
</script>

<style scoped lang="scss">
.about {
    display: flex;
    margin: 1rem 2rem;
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

/* Mobile */
@media screen and (max-width: 768px) {
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
}
</style>
