<template>
  <header>

    <div class="wrapper">

      <nav>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useGeneratorStore } from './stores/generator';
import skills from "@/data/skills.json";
import societies from "@/data/societies.json";
import professions from "@/data/professions.json";
import { ref } from 'vue';

const generatorStore = useGeneratorStore();

generatorStore.skills = ref(skills)
generatorStore.societies = ref(societies)
generatorStore.professions = ref(professions)

</script>

<style scoped></style>
