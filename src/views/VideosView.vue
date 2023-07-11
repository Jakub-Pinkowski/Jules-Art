<template>
    <section id="videos">
        <div class="description">
            <h1>Videos</h1>
        </div>
        <div class="video_container">
            <div class="video">
                <video src="../assets/videos/Berlin_Romance.mov" poster="../assets/images/video_1.jpg"
                    class="w-100 shadow-1-strong rounded mb-4" controls autoplay muted></video>
            </div>
            <div class="video">
                <video src="../assets/videos/Berlin_Romance_part_2.mov" poster="../assets//images/video_2.jpg"
                    class="w-100 shadow-1-strong rounded mb-4" controls></video>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
#videos {
    margin: 1rem 2rem;

    .video_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        width: 100%;
        height: 100%;

        .video {
            width: 80%;
            height: 100%;
            margin: 2rem;
        }

    }



}

@media screen and (max-width: 768px) {
    .video {
        width: 100% !important;
    }
}
</style>