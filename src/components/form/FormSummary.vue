<template>
    <div class="card" style="top: 1rem; position: sticky;">
        <div class="name"><strong>{{ $t('name') }}</strong>: {{ adventurer.name }}</div>
        <div class="profession">
            <strong>{{ $t('profession_label') }}</strong>:
            <template v-if="adventurer.profession">{{ $t(`profession.${adventurer.profession.name}`) }}</template>
        </div>
        <div class="skills">
            <table>
                <tr v-for="skill in sortedSkills">
                    <td>{{ $t(`skill.${skill.name}`) }}</td>
                    <td>{{ skill.value }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useGeneratorStore } from '@/stores/generator';
import { sortedSkills as sortSkills } from '@/core/helpers';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const generatorStore = useGeneratorStore();
const adventurer = generatorStore.adventurer;
const { t } = useI18n();

const sortedSkills = computed(() => sortSkills(adventurer.skills, t))
</script>

<style lang="scss" scoped>
.card {
    >div {
        text-transform: capitalize;
    }
}

table {
    line-height: 1.05;
}
</style>
