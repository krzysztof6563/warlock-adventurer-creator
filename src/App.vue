<template>
    <header>
        <div class="wrapper">
            <nav></nav>
        </div>
    </header>

    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useGeneratorStore } from "./stores/generator";
import skills from "@/data/warlock/skills.json";
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
import { ref } from "vue";

const generatorStore = useGeneratorStore();

generatorStore.skills = ref(skills);
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
    facialHair
};
</script>

<style scoped></style>
