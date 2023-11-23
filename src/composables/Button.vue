<template>
    <button class="custom-button btn btn-sm">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.custom-button {
    margin: 1rem 0;
    width: 90px;
    border: 1px solid var(--dark-accent);
    background-color: var(--white);
    color: var(--main-bg-color);
    transition: background-color 0.5s ease;
}

.custom-button:hover {
    border: 1px solid var(--dark-accent);
    background-color: var(--light-accent);
}
</style>
