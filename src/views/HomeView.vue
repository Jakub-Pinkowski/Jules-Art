<template>
    <section id="home">
        <div class="description">
            <h1>Jules-Art</h1>
        </div>
        <div id="choice_container">
            <div class="choice">
                <h3>Read more about me</h3>
                <router-link to="/about">
                    <img src="../assets/images/about.jpg" alt="about_me">
                </router-link>
                <router-link class="btn btn-sm btn-outline-secondary link" to="/about">
                    View
                </router-link>
            </div>
            <div class="choice">
                <h3>Checkout my photos</h3>
                <router-link to="/photos">
                    <img src="../assets/images/4.jpg" alt="photos">
                </router-link>
                <router-link class="btn btn-sm btn-outline-secondary link" to="/photos">
                    View
                </router-link>
            </div>
            <div class="choice">
                <h3>Checkout my videos</h3>
                <router-link to="/videos">
                    <img src="../assets/images/3.jpg" alt="videos">
                </router-link>
                <router-link class="btn btn-sm btn-outline-secondary link" to="/videos">
                    View
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

    .link {
        text-decoration: none;
        padding: 0.5em 1.5em;
        border: 1px solid var(--dark-accent);
        color: var(--main-bg-color);
        margin: 2rem;
        padding: 0.5rem 5rem;
    }

    a:hover {
        background-color: var(--light-accent);
    }

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
                transition: all 0.2s ease-in-out;
            }

            img:hover {
                opacity: 0.7;
                scale: 1.05;
                cursor: pointer;
            }
        }
    }
}
</style>