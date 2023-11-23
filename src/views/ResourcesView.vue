<template>
    <section class="view">
        <h1>Resources</h1>
        <div class="resources-gallery">
            <div v-for="(resource, index) in resources">
                <div class="image-container">
                    <img :src="resource.image" alt="" />
                </div>
                <div class="text">
                    <h2>{{ resource.name }}</h2>
                    <p>{{ resource.description }}</p>
                </div>
                <button @click="downloadResource(resource.src, resource.name)">Download</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useResourceStore } from '@/stores/resources'

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
    .resources-gallery{
        .image-container {
            width: 200px;
            height: 200px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>
