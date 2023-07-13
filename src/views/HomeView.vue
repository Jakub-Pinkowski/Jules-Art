<template>
    <section id="home">
        <div class="description">
            <h1>Jules-Art</h1>
        </div>
        <div id="choice_container">
            <div class="choice">
                <h3>Read more about me</h3>
                <router-link to="/about">
                    <img src="../assets/images/about_cropped.png" alt="about_me">
                </router-link>

            </div>
            <div class="choice">
                <h3>Checkout my photos</h3>
                <router-link to="/photos">
                    <img src="../assets/images/4.jpg" alt="photos">
                </router-link>

            </div>
            <div class="choice">
                <h3>Checkout my videos</h3>
                <router-link to="/videos">
                    <img src="../assets/images/video_1_cropped.jpg" alt="videos">
                </router-link>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
#home {
    margin: 1rem 2rem;

    #choice_container {
        display: flex;

        .choice {
            width: 33%;
            height: 100%;
            margin: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

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
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.30), 0 6px 20px rgba(0, 0, 0, 0.22);
            }
        }
    }
}

@media screen and (max-width: 768px) {
    #choice_container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
    }

    .choice {
        width: 80% !important;
        height: auto;
    }
}
</style>