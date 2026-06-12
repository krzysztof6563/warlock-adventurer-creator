<template>
    <header>
        <RouterLink class="logo" :to="{ name: 'HomeView' }">
            <img src="/logo.webp" alt="" class="logo" />
        </RouterLink>
    </header>

    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: center;
}

.logo {
    height: 3rem;
    width: auto;

    @media screen and (min-width: 1200px) {
        height: 4rem;
    }
}
</style>
