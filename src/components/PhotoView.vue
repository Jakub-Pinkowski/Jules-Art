<template>
    <div>
        <img :src="`../assets/images/${id}.jpg`" alt="Photo">
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// The photo ID is exposed as a prop
const id = ref(route.params.id);

// Watch for route changes and update the id accordingly
watch(() => route.params.id, (newId) => {
    id.value = newId;
});
</script>