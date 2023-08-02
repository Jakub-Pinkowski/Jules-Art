<template>
    <section id="photos" class="view">
        <ViewDescription>Photos</ViewDescription>

        <!-- Gallery -->
        <div class="row gallery">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                    v-for="image in row1"
                    :key="image.name"
                    :src="image.src"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Gallery Photo"
                    @click="openModal(image.src)"
                />
            </div>
            <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                    v-for="image in row2"
                    :key="image.name"
                    :src="image.src"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Gallery Photo"
                    @click="openModal(image.src)"
                />
            </div>
            <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                    v-for="image in row3"
                    :key="image.name"
                    :src="image.src"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Gallery Photo"
                    @click="openModal(image.src)"
                />
            </div>
        </div>

        <!-- Modal-->
        <transition name="modal" mode="out-in" appear>
            <div class="photo_modal" v-if="modalOpen">
                <div class="modal-background" @click="closeModal"></div>
                <div class="modal-content" @click="closeModal">
                    <img :src="modalImage" alt="Full Size Image" />
                </div>
            </div>
        </transition>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useImageStore } from '@/stores/images';

const imageStore = useImageStore();
imageStore.fetchImages();
const images = imageStore.images;

interface ImageObject {
    name: string;
    src: string;
    row: number;
}

// Gallery rows
let row1: Array<ImageObject> = [];
let row2: Array<ImageObject> = [];
let row3: Array<ImageObject> = [];

let i = 0;
for (i = 0; i < images.length; i++) {
    if (i < 2) {
        row1.push(images[i]);
    } else if (i < 5) {
        row2.push(images[i]);
    } else {
        row3.push(images[i]);
    }
}

// Modal functionality
let modalOpen = ref(false);
let modalImage = ref('');

const openModal = (imageSrc: string) => {
    modalImage.value = imageSrc;
    modalOpen.value = true;
};

const closeModal = () => {
    modalOpen.value = false;
};
</script>

<style scoped lang="scss">
#photos {
    .gallery {
        img {
            transition: all 0.5s ease-out;
        }

        img:hover {
            opacity: 0.95;
            transform: scale(1.05);
            cursor: pointer;
        }
    }

    /* Modal */

    .photo_modal {
        display: flex;
        position: fixed;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        align-items: center;
        overflow: hidden;
        justify-content: center;

        .modal-background {
            position: fixed;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(5px);
            background-color: rgba(0, 0, 0, 0.7);
        }

        .modal-content {
            max-width: 1200px;
            max-height: 900px;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: auto;
                height: 900px;
                object-fit: contain;
                max-width: 100%;
            }
        }
    }
}

/* Modal Transition */

.modal-enter-active {
    transition: opacity 0.3s ease-out;
}

.modal-leave-active {
    transition: opacity 0.2s ease-in;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

/* Mobile */

@media screen and (max-width: 768px) {
    img:hover {
        opacity: 1 !important;
        transform: scale(1) !important;
    }
}
</style>
