<template>
    <section class="view">
        <h1>Resources</h1>
        <div class="resources-gallery"></div>
    </section>
</template>

<script setup lang="ts">
import { useResourceStore } from '@/stores/resources'

const resourceStore = useResourceStore()
const resources = resourceStore.resources
</script>

<style scoped lang="scss">
.view {
}
</style>
