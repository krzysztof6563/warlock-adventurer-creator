<template>
    <div class="card">
        <h2>{{ $t('form.step1.initial_skills_header') }}</h2>
        <SkillsSelect />
    </div>
</template>

<script setup>
import SkillsSelect from '../SkillsSelect.vue';
</script>