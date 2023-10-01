<template>
    <div class="social-media">
        <a target="_blank" :href="link_insta">
            <img :src="icon_insta" class="icon" alt="Instagram icon" />
        </a>
        <a target="_blank" :href="link_tiktok">
            <img :src="tiktok_icon" class="icon" alt="TikTok icon" />
        </a>
    </div>
</template>

<script setup lang="ts">
import icon_insta from '../../assets/icons/insta_icon.svg'
import tiktok_icon from '../../assets/icons/tiktok_icon.svg'
const link_insta = 'https://www.instagram.com/jules_matias/?hl=en'
const link_tiktok = 'https://www.tiktok.com/@julesmatiasart?lang=en'
</script>

<style scoped lang="scss">
.icon {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
}
</style>
