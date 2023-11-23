<template>
    <section class="view">
        <h1>Resources</h1>
        <div class="resources-gallery">
            <div class="resource" v-for="(resource, index) in resources">
                <div class="image-container">
                    <img :src="resource.image" alt="" />
                </div>
                <div class="text">
                    <h2>{{ resource.name }}</h2>
                    <p>{{ resource.description }}</p>
                </div>
                <Button @click="downloadResource(resource.src, resource.name)">Download</Button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useResourceStore } from '@/stores/resources'
import Button from '@/composables/Button.vue'

const resourceStore = useResourceStore()
const resources = resourceStore.resources

const downloadResource = (url: string, name: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
</script>

<style scoped lang="scss">
.view {
    .resources-gallery {
        min-height: 80vh;
        .resource {
            width: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: justify;
        }
        .image-container {
            border: 1px solid var(--dark-gray);
            border-radius: 5px;
            width: 100%;
            height: auto;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .text {
            margin: 0.5rem 0;
            padding: 0.5rem;
        }

        button {
            width: 200px;
        }
    }
}
</style>
