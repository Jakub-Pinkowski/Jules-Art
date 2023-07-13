<template>
    <section id="photos">
        <div class="description">
            <h1>Photos</h1>
        </div>

        <!-- Gallery -->
        <div class="row gallery">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img :src="image1" class="w-100 shadow-1-strong rounded mb-4" alt="Gallery Photo"
                    @click="openModal(image1)" />
                <img :src="image2" class="w-100 shadow-1-strong rounded mb-4" alt="Gallery Photo"
                    @click="openModal(image2)" />
            </div>
            <div class="col-lg-4 mb-4 mb-lg-0">
                <img :src="image4" class="w-100 shadow-1-strong rounded mb-4" alt="Gallery Photo"
                    @click="openModal(image4)" />
                <img :src="image3" class="w-100 shadow-1-strong rounded mb-4" alt="Gallery Photo"
                    @click="openModal(image3)" />
                <img :src="image5" class="w-100 shadow-1-strong rounded mb-4" alt="Gallery Photo"
                    @click="openModal(image5)" />
            </div>
            <div class="col-lg-4 mb-4 mb-lg-0">
                <img :src="image7" class="w-100 shadow-1-strong rounded mb-4" alt="Gallery Photo"
                    @click="openModal(image7)" />
                <img :src="image6" class="w-100 shadow-1-strong rounded mb-4" alt="Gallery Photo"
                    @click="openModal(image6)" />
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
import image1 from '@/assets/images/1.jpg';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/3.jpg';
import image4 from '@/assets/images/4.jpg';
import image5 from '@/assets/images/5.jpg';
import image6 from '@/assets/images/6.jpg';
import image7 from '@/assets/images/7.jpg';

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
    margin: 1rem 2rem;

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
    }

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
    }

    .modal-content img {
        width: auto;
        height: 900px;
        object-fit: contain;
        max-width: 100%;
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
        opacity: 1;
        transform: scale(1);
    }
}
</style>