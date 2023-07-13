<template>
    <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
            <router-link class="nav-link" to="/">
                <TheLogo />
            </router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/photos">Photos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/videos">Videos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/reels">Reels</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
/* move the navbar to the right */
#navbarSupportedContent {
    display: flex;
    justify-content: flex-end;
}

.nav-link {
    margin: 0.5rem 1.2rem;
    font-size: 1.2rem;
    color: var(--main-bg-color);
}

.nav-link:hover {
    color: var(--highlight-color);
}
</style>
