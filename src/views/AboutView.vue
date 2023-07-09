<template>
    <section id="about">
        <section class="photo">
            <img src="../assets/images/about.jpg" alt="artist-photo" />
        </section>
        <section class="text">
            <h1>Hello World!</h1>
            <h2>Artistic soul. Berlin.</h2>
            <p>
                Photography is my passion and I would like to share my best
                work here. I am interested in traveling, aesthetics, and
                fashion photography. Recently, I've started diving into
                videography and I hope to share my first work soon. I will
                be happy to work on interesting projects and welcome all
                creative souls to reach out to me via social platforms.
            </p>
            <div class="social-media">
                <a target="_blank" href="https://www.facebook.com/julesmatiasart"><img src="../assets/icons/fb_icon.svg"
                        class="icon" alt="Facebook icon" /></a>
                <a target="_blank" href="https://www.instagram.com/jules_matias/?hl=en"><img
                        src="../assets/icons/insta_icon.svg" class="icon" alt="Instagram icon" /></a>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
#about {

    display: flex;
    margin: 4rem 2rem;

    .photo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;

        img {
            width: 70%;
            height: auto;
            border-radius: 5%;
        }
    }

    .text {
        flex-direction: column;
        justify-content: left;
        display: flex;
        width: 50%;
        text-align: justify;
        text-justify: inter-word;


        .icon {
            width: 3rem;
            height: 3rem;
            margin-right: 1rem;
        }
    }
}
</style>