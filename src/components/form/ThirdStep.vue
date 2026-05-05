<template>
    <div class="card">
        <button class="btn btn-primary" @click="rollProfessions">
            Losuj
        </button>
        <div class="grid-2x">
            <div class="profession capitalize"
                :class="{ selected: generatorStore.adventurer.profession?.name == profession.name }"
                v-for="profession in rolledProfessions" @click="selectProfession(profession)">
                <div>
                    <b>{{ $t(`profession.${profession.name}`) }}</b>
                </div>
                <div v-html="professionSkillsString(profession)">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGeneratorStore } from '@/stores/generator';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'

const generatorStore = useGeneratorStore();
let rolledProfessions = ref([]);
const { t } = useI18n()

const rollProfessions = () => {
    let professions = [];
    for (let i = 0; i < 6; i++) {
        let roll = Math.randomBetween(1, 6);
        let index = i * 6 + roll;
        professions.push(generatorStore.professions[index]);
    }

    rolledProfessions.value = professions;
}

const professionSkillsString = (profession) => {
    let strings = [];

    Object.entries(profession.skills).forEach(([skillName, value]) => {
        let name = t(`skill.${skillName}`)
        name = name.charAt(0).toUpperCase() + name.slice(1);
        strings.push(`${name} ${value}`)
    })



    return strings.join("<br>")
}

const selectProfession = (profession) => {
    generatorStore.adventurer.setSkillsBasedOnProfession(profession);

}
</script>

<style scoped lang="scss">
.profession {
    &.selected {
        background: rgb(255 255 255 / .1);
    }
}
</style>