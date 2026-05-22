<template>
    <main>
        <div class="form-layout-wrapper">
            <div class="form-wrapper">
                <section id="first-step">
                    <FirstStep />
                </section>
                <section id="second-step" style="margin-top: 2rem">
                    <SecondStep />
                </section>
                <section id="third-step">
                    <ThirdStep />
                </section>
                <section id="fourth-step" style="margin-top: 2rem">
                    <FourthStep />
                </section>

                <!-- <section style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem">
                <div v-for="profession in generatorStore.professions" style="border: 1px solid grey;">
                    <i>{{ profession.name }}:</i> <b>{{ $t(`profession.${profession.name}`) }}</b>
                    <div v-for="(value, skill) in profession.skills">{{ skill }}: {{ value }}</div>
                </div>
            </section> -->
            </div>
            <div class="summary-wrapper">
                <FormSummary />
            </div>
        </div>
    </main>
</template>

<script setup>
import { Adventurer } from "@/core/adventurer";
import { useGeneratorStore } from "@/stores/generator";
import FormSummary from "@/components/form/FormSummary.vue";
import FirstStep from "@/components/form/FirstStep.vue";
import SecondStep from "@/components/form/SecondStep.vue";
import ThirdStep from "@/components/form/ThirdStep.vue";
import FourthStep from "@/components/form/FourthStep.vue";
import { watch } from "vue";

const generatorStore = useGeneratorStore();

generatorStore.adventurer = new Adventurer(generatorStore.skills.map((name) => ({ name: name, value: 0 })));

const adventurer = generatorStore.adventurer;
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
</style>
