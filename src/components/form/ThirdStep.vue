<template>
    <div class="card" style="margin-top: 2rem">
        <div class="flex-between">
            <h2>{{ $t("form.step3.header") }}</h2>
            <button class="btn btn-primary" @click="rollProfessions">Losuj</button>
        </div>
        <div class="grid-2x">
            <div
                class="profession capitalize"
                :class="{ selected: generatorStore.adventurer.profession?.name == profession.name }"
                v-for="profession in rolledProfessions"
                @click="selectProfession(profession)"
            >
                <div>
                    <b>{{ $t(`profession.${profession.name}`) }}</b>
                </div>
                <div v-html="professionSkillsString(profession)"></div>
            </div>
            <div v-if="rolledProfessions.length == 0" style="grid-column: span 2">
                Kliknij przycisk, aby wylosować profesje
            </div>
        </div>
    </div>
</template>

<script setup>
import { rollTable } from "@/core/roll";
import { useGeneratorStore } from "@/stores/generator";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const generatorStore = useGeneratorStore();
let rolledProfessions = ref([]);
const { t } = useI18n();

const rollProfessions = () => {
    rolledProfessions.value = rollTable(6, 6, generatorStore.professions);
};

const professionSkillsString = (profession) => {
    let strings = [];

    Object.entries(profession.skills).forEach(([skillName, value]) => {
        let name = t(`skill.${skillName}`);
        name = name.charAt(0).toUpperCase() + name.slice(1);
        strings.push(`${name} ${value}`);
    });

    return strings.join("<br>");
};

const selectProfession = (profession) => {
    generatorStore.adventurer.setSkillsBasedOnProfession(profession);
};
</script>

<style scoped lang="scss">
.profession {
    cursor: pointer;
    background: var(--nonSelectBg);
    padding: 0.4rem;

    &.selected {
        background: var(--selectBg);
    }
}
</style>
