<template>
    <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; gap: 1rem">
            <h2 style="margin: 0">{{ t("form.step4.title") }}</h2>
            <button class="btn btn-primary" @click="rollAll" :disabled="isAllRolled">
                {{ t("form.step4.roll_all") }}
            </button>
        </div>

        <div class="grid-2x">
            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.talents") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollTalents" :disabled="isTalentsRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <template v-if="step4.talents[0]">
                    <div>{{ talentKey(step4.talents[0]) }}</div>
                    <div class="description">{{ talentDescription(step4.talents[0]) }}</div>
                </template>
                <template v-if="step4.talents[1]">
                    <hr style="opacity: 0.5; margin-block: 0.4rem" />
                    <div>{{ talentKey(step4.talents[1]) }}</div>
                    <div class="description">{{ talentDescription(step4.talents[1]) }}</div>
                </template>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.height") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollHeight" :disabled="isHeightRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <div>{{ step4.height ? t(`warlock.looks.height.${step4.height}`) : t("form.step4.not_set") }}</div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.hair_color") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollHairColor" :disabled="isHairColorRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <div>
                    {{ step4.hairColor ? t(`warlock.looks.hair_color.${step4.hairColor}`) : t("form.step4.not_set") }}
                </div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.body_build") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollBodyBuild" :disabled="isBodyBuildRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <div>
                    {{ step4.bodyBuild ? t(`warlock.looks.body_build.${step4.bodyBuild}`) : t("form.step4.not_set") }}
                </div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.hair_type") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollHairType" :disabled="isHairTypeRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <div>
                    {{ step4.hairType ? t(`warlock.looks.hair_type.${step4.hairType}`) : t("form.step4.not_set") }}
                </div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.skin") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollSkin" :disabled="isSkinRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <div>{{ step4.skin ? t(`warlock.looks.skin.${step4.skin}`) : t("form.step4.not_set") }}</div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.hairstyle") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollHairstyle" :disabled="isHairstyleRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <div>
                    {{ step4.hairstyle ? t(`warlock.looks.hairstyle.${step4.hairstyle}`) : t("form.step4.not_set") }}
                </div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.facial_hair") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollFacialHair" :disabled="isFacialHairRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <div>
                    {{
                        step4.facialHair ? t(`warlock.looks.facial_hair.${step4.facialHair}`) : t("form.step4.not_set")
                    }}
                </div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.misfortune") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollMisfortune" :disabled="isMisfortuneRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <div>
                    {{ step4.misfortune ? t(`warlock.misfortune.${step4.misfortune}`) : t("form.step4.not_set") }}
                </div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.keepsake") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollKeepsake" :disabled="isKeepsakeRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <template v-if="step4.keepsake">
                    <div>{{ itemKey("keepsake", step4.keepsake) }}</div>
                    <div class="description">{{ itemDescription("keepsake", step4.keepsake) }}</div>
                </template>
                <div v-else>{{ t("form.step4.not_set") }}</div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.where_from") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollWhereFrom" :disabled="isWhereFromRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <template v-if="step4.whereFrom">
                    <div>{{ itemKey("where_from", step4.whereFrom) }}</div>
                    <div class="description">{{ itemDescription("where_from", step4.whereFrom) }}</div>
                </template>
                <div v-else>{{ t("form.step4.not_set") }}</div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>
                        {{ t("form.step4.travel_reason") }}<br /><span class="sub-label">{{ $t("choose") }}</span>
                    </label>
                    <div class="row">
                        <button class="btn" @click="rollTravelReason" :disabled="isTravelReasonRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <div class="choices" v-if="step4.travelReasonOptions.length">
                    <button
                        v-for="option in step4.travelReasonOptions"
                        :key="option"
                        class="btn"
                        :class="{ selected: step4.travelReason === option }"
                        @click="step4.travelReason = option"
                    >
                        <div>{{ itemKey("travel_reason", option) }}</div>
                        <div class="description">{{ itemDescription("travel_reason", option) }}</div>
                    </button>
                </div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>
                        {{ t("form.step4.how_we_met") }}<br /><span class="sub-label">{{ $t("choose") }}</span>
                    </label>
                    <div class="row"></div>

                    <button class="btn" @click="rollHowWeMet" :disabled="isHowWeMetRolled">
                        {{ t("form.step4.roll") }}
                    </button>
                </div>
                <div class="choices" v-if="step4.howWeMetOptions.length">
                    <button
                        v-for="option in step4.howWeMetOptions"
                        :key="option"
                        class="btn"
                        :class="{ selected: step4.howWeMet === option }"
                        @click="step4.howWeMet = option"
                    >
                        <div>{{ itemKey("how_we_met", option) }}</div>
                        <div class="description">{{ itemDescription("how_we_met", option) }}</div>
                    </button>
                </div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>
                        {{ t("form.step4.dark_secret") }}<br /><span class="sub-label">{{ $t("choose") }}</span>
                    </label>
                    <div class="row"></div>

                    <button class="btn" @click="rollDarkSecret" :disabled="isDarkSecretRolled">
                        {{ t("form.step4.roll") }}
                    </button>
                </div>
                <div class="choices" v-if="step4.darkSecretOptions.length">
                    <button
                        v-for="option in step4.darkSecretOptions"
                        :key="option"
                        class="btn"
                        :class="{ selected: step4.darkSecret === option }"
                        @click="step4.darkSecret = option"
                    >
                        <div>{{ itemKey("dark_secret", option) }}</div>
                        <div class="description">{{ itemDescription("dark_secret", option) }}</div>
                    </button>
                </div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.farewell") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollFarewell" :disabled="isFarewellRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <template v-if="step4.farewell">
                    <div>{{ itemKey("farewell", step4.farewell) }}</div>
                    <div class="description">{{ itemDescription("farewell", step4.farewell) }}</div>
                </template>
                <div v-else>{{ t("form.step4.not_set") }}</div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.who_you_know") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollWhoYouKnow" :disabled="isWhoYouKnowRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>
                <template v-if="step4.whoYouKnow">
                    <div>{{ itemKey("who_you_know", step4.whoYouKnow) }}</div>
                    <div class="description">{{ itemDescription("who_you_know", step4.whoYouKnow) }}</div>
                </template>
                <div v-else>{{ t("form.step4.not_set") }}</div>
            </div>

            <div class="panel">
                <div class="panel-header">
                    <label>{{ t("form.step4.passions") }}</label>
                    <div class="row">
                        <button class="btn" @click="rollPassions" :disabled="isPassionsRolled">
                            {{ t("form.step4.roll") }}
                        </button>
                    </div>
                </div>

                <div>
                    {{ t("form.step4.positive") }}:
                    {{
                        step4.passionPositive
                            ? itemKey("passions.positive", step4.passionPositive)
                            : t("form.step4.not_set")
                    }}
                </div>
                <div>
                    {{ t("form.step4.negative") }}:
                    {{
                        step4.passionNegative
                            ? itemKey("passions.negative", step4.passionNegative)
                            : t("form.step4.not_set")
                    }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGeneratorStore } from "@/stores/generator";
import { roll, rollTable, rollRangeTable } from "@/core/roll";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const generatorStore = useGeneratorStore();
const { t } = useI18n();
const step4 = generatorStore.adventurer;

const itemKey = (collection, key) => t(`warlock.${collection}.${key}.key`);
const itemDescription = (collection, key) => t(`warlock.${collection}.${key}.description`);
const talentKey = (key) => {
    const path = `warlock.talents.${key}.key`;
    const value = t(path);
    return value === path ? t(`warlock.talents.${key}`) : value;
};
const talentDescription = (key) => {
    const path = `warlock.talents.${key}.description`;
    const value = t(path);
    return value === path ? null : value;
};

const asKey = (item) => {
    if (!item) return null;
    return typeof item === "string" ? item : (item.key ?? null);
};

const isTalentsRolled = computed(() => Boolean(step4.talents?.[0] && step4.talents?.[1]));
const isHeightRolled = computed(() => Boolean(step4.height));
const isHairColorRolled = computed(() => Boolean(step4.hairColor));
const isBodyBuildRolled = computed(() => Boolean(step4.bodyBuild));
const isHairTypeRolled = computed(() => Boolean(step4.hairType));
const isSkinRolled = computed(() => Boolean(step4.skin));
const isHairstyleRolled = computed(() => Boolean(step4.hairstyle));
const isFacialHairRolled = computed(() => Boolean(step4.facialHair));
const isMisfortuneRolled = computed(() => Boolean(step4.misfortune));
const isKeepsakeRolled = computed(() => Boolean(step4.keepsake));
const isWhereFromRolled = computed(() => Boolean(step4.whereFrom));
const isTravelReasonRolled = computed(() => Boolean(step4.travelReason));
const isHowWeMetRolled = computed(() => Boolean(step4.howWeMet));
const isDarkSecretRolled = computed(() => Boolean(step4.darkSecret));
const isFarewellRolled = computed(() => Boolean(step4.farewell));
const isWhoYouKnowRolled = computed(() => Boolean(step4.whoYouKnow));
const isPassionsRolled = computed(() => Boolean(step4.passionPositive && step4.passionNegative));
const isAllRolled = computed(
    () =>
        isTalentsRolled.value &&
        isHeightRolled.value &&
        isHairColorRolled.value &&
        isBodyBuildRolled.value &&
        isHairTypeRolled.value &&
        isSkinRolled.value &&
        isHairstyleRolled.value &&
        isFacialHairRolled.value &&
        isMisfortuneRolled.value &&
        isKeepsakeRolled.value &&
        isWhereFromRolled.value &&
        isTravelReasonRolled.value &&
        isHowWeMetRolled.value &&
        isDarkSecretRolled.value &&
        isFarewellRolled.value &&
        isWhoYouKnowRolled.value &&
        isPassionsRolled.value,
);

const rollTalents = () => {
    const rolledTalents = rollTable(
        2,
        20,
        generatorStore.talents.map((key) => ({ key })),
    );
    step4.talents[0] = asKey(rolledTalents?.[0]);
    step4.talents[1] = asKey(rolledTalents?.[1]);
};

const rollHeight = () => (step4.height = rollRangeTable(generatorStore.looksTables.height, roll("2k6"))?.value ?? null);
const rollHairColor = () =>
    (step4.hairColor = rollRangeTable(generatorStore.looksTables.hairColor, roll("1k6"))?.value ?? null);
const rollBodyBuild = () =>
    (step4.bodyBuild = rollRangeTable(generatorStore.looksTables.bodyBuild, roll("2k6"))?.value ?? null);
const rollHairType = () =>
    (step4.hairType = rollRangeTable(generatorStore.looksTables.hairType, roll("1k6"))?.value ?? null);
const rollSkin = () => (step4.skin = rollRangeTable(generatorStore.looksTables.skin, roll("2k6"))?.value ?? null);
const rollHairstyle = () =>
    (step4.hairstyle = rollRangeTable(generatorStore.looksTables.hairstyle, roll("1k6"))?.value ?? null);
const rollFacialHair = () =>
    (step4.facialHair = rollRangeTable(generatorStore.looksTables.facialHair, roll("1k6"))?.value ?? null);

const rollMisfortune = () => (step4.misfortune = asKey(rollTable(1, 20, generatorStore.misfortune)?.[0]));
const rollKeepsake = () => (step4.keepsake = asKey(rollTable(1, 20, generatorStore.keepsake)?.[0]));
const rollWhereFrom = () => (step4.whereFrom = asKey(rollTable(1, 20, generatorStore.whereFrom)?.[0]));

const rollChooseOneFromTwo = (table, optionsField, selectedField) => {
    step4[optionsField] = rollTable(2, 6, table)
        .map((item) => asKey(item))
        .filter(Boolean);
    step4[selectedField] = step4[optionsField][0] ?? null;
};

const rollTravelReason = () => rollChooseOneFromTwo(generatorStore.travelReason, "travelReasonOptions", "travelReason");
const rollHowWeMet = () => rollChooseOneFromTwo(generatorStore.howWeMet, "howWeMetOptions", "howWeMet");
const rollDarkSecret = () => rollChooseOneFromTwo(generatorStore.darkSecret, "darkSecretOptions", "darkSecret");

const rollFarewell = () => (step4.farewell = asKey(rollTable(1, 6, generatorStore.farewell)?.[0]));
const rollWhoYouKnow = () => (step4.whoYouKnow = asKey(rollTable(1, 20, generatorStore.whoYouKnow)?.[0]));

const rollPassions = () => {
    step4.passionPositive = asKey(rollTable(1, 6, generatorStore.passions?.positive)?.[0]);
    step4.passionNegative = asKey(rollTable(1, 6, generatorStore.passions?.negative)?.[0]);
};

const rollAll = () => {
    rollTalents();
    rollHeight();
    rollHairColor();
    rollBodyBuild();
    rollHairType();
    rollSkin();
    rollHairstyle();
    rollFacialHair();
    rollMisfortune();
    rollKeepsake();
    rollWhereFrom();
    rollTravelReason();
    rollHowWeMet();
    rollDarkSecret();
    rollFarewell();
    rollWhoYouKnow();
    rollPassions();
};
</script>

<style scoped>
.panel {
    /* border: 1px solid #ddd; */
    padding: 0.75rem;
    background: var(--nonSelectBg);

    .panel-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;

        label {
            font-weight: 700;

            .sub-label {
                font-size: 0.85em;
            }
        }

        .row {
            margin: 0;
        }
    }
}

.row {
    margin: 0.5rem 0;
}

.choices {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-wrap: wrap;

    .btn {
        text-align: left;
        background: none;
        border: none;
        color: var(--color-text);
        font-size: 1em;
        padding: 0.4rem;
    }
}

.btn.selected {
    /* border: 1px solid #333; */
    background: var(--selectBg);
    font-weight: 700;
}

.description {
    font-size: 0.9em;
    font-style: italic;
    margin-top: 0.2rem;
}
</style>
