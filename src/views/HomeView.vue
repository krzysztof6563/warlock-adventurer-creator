<template>
    <main>
        <h1>Witaj w generatorze postaci do systemu Warlock!</h1>
        <RouterLink class="btn" :to="{ name: 'WarlockCharacterForm' }">Nowa postać</RouterLink>
    </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
}

h1 {
    text-align: center;
}
</style>
