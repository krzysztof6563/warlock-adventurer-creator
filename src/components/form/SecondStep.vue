<template>
    <div class="card">
        <div class="flex-between">
            <h2>{{ $t("form.step2.header") }}</h2>
            <button class="btn btn-primary" :disabled="wasRolled" @click="rollAll">
                {{ $t("form.step4.roll_all") }}
            </button>
        </div>
        <div class="grid-2x">
            <div class="form-input" style="grid-column: span 2">
                <label for="" class="form-label">{{ $t("adventurer.name") }}</label>
                <div style="display: flex; gap: 0.5rem">
                    <input class="form-input" type="text" v-model="adventurer.name" />
                </div>
            </div>
            <div class="form-input">
                <label for="" class="form-label">{{ $t("adventurer.stamina") }}</label>
                <div style="display: flex; gap: 0.5rem">
                    <span style="cursor: pointer" @click="adventurer.stamina = roll('2k6+12')">🎲</span>
                    <input readonly class="form-input" type="number" v-model="adventurer.stamina" />
                </div>
            </div>
            <div class="form-input">
                <label for="society" class="form-label">{{ $t("adventurer.society") }}</label>
                <div style="display: flex; gap: 0.5rem">
                    <select name="society" id="society" v-model="adventurer.society">
                        <option :value="society" class="capitalize" v-for="society in generatorStore.societies">
                            {{ $t(`society.${society}`) }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="form-input">
                <label for="luck" class="form-label">{{ $t("adventurer.luck") }}</label>
                <div style="display: flex; gap: 0.5rem">
                    <span style="cursor: pointer" @click="adventurer.luck = roll('1k6+7')">🎲</span>
                    <input readonly name="luck" id="luck" class="form-input" type="number" v-model="adventurer.luck" />
                </div>
            </div>
            <div class="form-input">
                <label for="courage" class="form-label">{{ $t("adventurer.courage") }}</label>
                <div style="display: flex; gap: 0.5rem">
                    <input
                        readonly
                        name="courage"
                        id="courage"
                        class="form-input"
                        type="number"
                        v-model="adventurer.courage"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGeneratorStore } from "@/stores/generator";
import { roll } from "@/core/roll";
import { ref, watch } from "vue";
import { timeoutScrollToBottom } from "@/core/helpers";

const generatorStore = useGeneratorStore();
const adventurer = generatorStore.adventurer;

const wasRolled = ref(false);

const rollAll = () => {
    adventurer.stamina = roll("2k6+12");
    adventurer.luck = roll("1k6+7");
    adventurer.society = generatorStore.societies[roll("1k4") - 1];
    wasRolled.value = true;
};

watch(
    () => ({
        name: adventurer.name,
        stamina: adventurer.stamina,
        society: adventurer.society,
        luck: adventurer.luck,
        courage: adventurer.courage,
    }),
    (oldValue, newValue) => {
        if (
            newValue.name != "" &&
            newValue.stamina != "" &&
            newValue.society != "" &&
            newValue.luck != "" &&
            newValue.courage != ""
        ) {
            generatorStore.creator.stepCompleted = Math.max(2, generatorStore.creator.stepCompleted);
            timeoutScrollToBottom();
        }
    },
);
</script>

<style lang="scss" scoped>
.form-input > div {
    width: 100%;
}

select,
input {
    width: 100%;

    &[readonly] {
        background: transparent;
        color: var(--color-text);
        border: none;
    }
}
</style>
