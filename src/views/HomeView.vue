<template>
    <main>
        <h1>{{ $t("home_view.greeting") }}</h1>
        <RouterLink class="btn" :to="{ name: 'WarlockCharacterForm' }">{{ $t("new_character") }}</RouterLink>
        <section class="saved-section">
            <h2>{{ $t("home_view.saved_characters") }}</h2>
            <div v-if="!storageStore.characters.length" class="empty-state">
                {{ $t("home_view.no_saved_characters") }}
            </div>
            <div v-else class="saved-grid">
                <WarlockCharacterCard
                    v-for="character in storageStore.characters"
                    :key="character.id"
                    :character="character"
                    :removable="true"
                    @remove="storageStore.removeCharacter"
                />
            </div>
        </section>
    </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import WarlockCharacterCard from "@/components/WarlockCharacterCard.vue";
import { useWalockStorageStore } from "@/stores/warlock-storage";

const storageStore = useWalockStorageStore();
storageStore.init();
</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 2rem 1rem 4rem;
}

h1 {
    text-align: center;
}

.saved-section {
    width: 100%;
}

.saved-grid {
    display: grid;
    align-items: start;
    gap: 1rem;
    grid-template-columns: 1fr;

    @media screen and (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
}

.empty-state {
    opacity: 0.8;
}
</style>
