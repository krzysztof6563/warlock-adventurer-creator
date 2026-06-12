<template>
    <header>
        <RouterLink class="logo" :to="{ name: 'HomeView' }">
            <img src="/logo.webp" alt="" style="height: 3rem; width: auto" />
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
</style>
