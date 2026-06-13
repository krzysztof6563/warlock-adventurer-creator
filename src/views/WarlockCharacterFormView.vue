<template>
    <main>
        <div class="form-layout-wrapper">
            <div class="form-wrapper">
                <section id="first-step">
                    <FirstStep />
                </section>
                <section id="second-step" style="margin-top: 2rem" v-if="generatorStore.creator.stepCompleted >= 1">
                    <SecondStep />
                </section>
                <section id="third-step" v-if="generatorStore.creator.stepCompleted >= 2">
                    <ThirdStep />
                </section>
                <section id="fourth-step" style="margin-top: 2rem" v-if="generatorStore.creator.stepCompleted >= 3">
                    <FourthStep />
                </section>
            </div>
            <div class="summary-wrapper">
                <WarlockCharacterCard :character="generatorStore.adventurer" :force-open="true" />
            </div>
        </div>
        <div v-if="saveNoticeVisible" class="save-notice">
            {{ $t("character_saved") }}
        </div>
        <div class="save-bar">
            <button class="btn btn-primary" @click="saveCharacter">{{ $t("save_character") }}</button>
        </div>
    </main>
</template>

<script setup>
import { Adventurer } from "@/core/adventurer";
import { useWalockGeneratorStore } from "@/stores/warlock-generator";
import { useWalockStorageStore } from "@/stores/warlock-storage";
import { ref, watch } from "vue";
import skills from "@/data/warlock/skills.json";
import names from "@/data/warlock/names.json";
import societies from "@/data/warlock/societies.json";
import professions from "@/data/warlock/professions.json";
import talents from "@/data/warlock/talents.json";
import misfortune from "@/data/warlock/misfortune.json";
import keepsake from "@/data/warlock/keepsake.json";
import whereFrom from "@/data/warlock/where_from.json";
import travelReason from "@/data/warlock/travel_reason.json";
import howWeMet from "@/data/warlock/how_we_met.json";
import darkSecret from "@/data/warlock/dark_secret.json";
import farewell from "@/data/warlock/farewell.json";
import whoYouKnow from "@/data/warlock/who_you_know.json";
import passions from "@/data/warlock/passions.json";
import height from "@/data/warlock/looks/height.json";
import hairColor from "@/data/warlock/looks/hair_color.json";
import bodyBuild from "@/data/warlock/looks/body_build.json";
import hairType from "@/data/warlock/looks/hair_type.json";
import skin from "@/data/warlock/looks/skin.json";
import hairstyle from "@/data/warlock/looks/hairstyle.json";
import facialHair from "@/data/warlock/looks/facial_hair.json";
import WarlockCharacterCard from "@/components/WarlockCharacterCard.vue";
import FormSummary from "@/components/form/FormSummary.vue";
import FirstStep from "@/components/form/FirstStep.vue";
import SecondStep from "@/components/form/SecondStep.vue";
import ThirdStep from "@/components/form/ThirdStep.vue";
import FourthStep from "@/components/form/FourthStep.vue";

const generatorStore = useWalockGeneratorStore();
const storageStore = useWalockStorageStore();
storageStore.init();

const initGenerator = () => {
    generatorStore.skills = ref(skills);
    generatorStore.names = ref(names);
    generatorStore.societies = ref(societies);
    generatorStore.professions = ref(professions);
    generatorStore.talents = talents;
    generatorStore.misfortune = misfortune;
    generatorStore.keepsake = keepsake;
    generatorStore.whereFrom = whereFrom;
    generatorStore.travelReason = travelReason;
    generatorStore.howWeMet = howWeMet;
    generatorStore.darkSecret = darkSecret;
    generatorStore.farewell = farewell;
    generatorStore.whoYouKnow = whoYouKnow;
    generatorStore.passions = passions;
    generatorStore.looksTables = {
        height,
        hairColor,
        bodyBuild,
        hairType,
        skin,
        hairstyle,
        facialHair,
    };
    generatorStore.adventurer = new Adventurer(generatorStore.skills.map((name) => ({ name: name, value: 0 })));
};
initGenerator();

const adventurer = generatorStore.adventurer;
const saveNoticeVisible = ref(false);
let saveNoticeTimeout;

const saveCharacter = () => {
    storageStore.saveCharacter(generatorStore.adventurer);
    saveNoticeVisible.value = true;

    clearTimeout(saveNoticeTimeout);
    saveNoticeTimeout = window.setTimeout(() => {
        saveNoticeVisible.value = false;
    }, 2500);
};
watch(
    () => adventurer.luck,
    (newValue, oldValue) => (adventurer.courage = 20 - newValue),
);
</script>

<style lang="scss">
.form-layout-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media screen and (min-width: 992px) {
        grid-template-columns: 2fr 1fr;
    }
}

.save-bar {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}

.save-notice {
    width: fit-content;
    margin: 1rem auto 0;
    padding: 0.65rem 1rem;
    background: rgb(120 170 90 / 0.18);
    border: 1px solid rgb(120 170 90 / 0.4);
}

.character-preview {
    margin-top: 2rem;
}
</style>
