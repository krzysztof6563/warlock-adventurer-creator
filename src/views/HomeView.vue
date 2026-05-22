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
