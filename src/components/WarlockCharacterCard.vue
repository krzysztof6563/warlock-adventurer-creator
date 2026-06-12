<template>
    <details class="saved-card" :open="forceOpen">
        <summary>
            <button
                v-if="removable"
                class="remove-button"
                type="button"
                :title="$t('delete_character')"
                :aria-label="$t('delete_character')"
                @click.prevent.stop="emit('remove', character.id)"
            >
                <RiDeleteBinLine />
            </button>
            <div class="saved-card-title">
                {{ character.name || $t("form.step4.not_set") }}
                ({{ character.society ? $t(`society.${character.society}`) : $t("form.step4.not_set") }})
            </div>
            <div class="saved-card-meta">
                Profesja:
                {{ character.profession ? $t(`profession.${character.profession.name}`) : $t("form.step4.not_set") }}
            </div>
        </summary>

        <div class="saved-card-body">
            <table class="details-table">
                <tr>
                    <td>{{ $t("adventurer.stamina") }}</td>
                    <td>{{ character.stamina ?? $t("form.step4.not_set") }}</td>
                </tr>
                <tr>
                    <td>{{ $t("adventurer.luck") }}</td>
                    <td>{{ character.luck ?? $t("form.step4.not_set") }}</td>
                </tr>
                <tr>
                    <td>{{ $t("adventurer.courage") }}</td>
                    <td>{{ character.courage ?? $t("form.step4.not_set") }}</td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.talents") }}</td>
                    <td>
                        <div v-if="character.talents?.[0]">
                            <div>{{ talentLabel(character.talents[0]) }}</div>
                            <div v-if="talentDescription(character.talents[0])" class="description">
                                {{ talentDescription(character.talents[0]) }}
                            </div>
                        </div>
                        <div v-if="character.talents?.[1]" style="margin-top: 0.35rem">
                            <div>{{ talentLabel(character.talents[1]) }}</div>
                            <div v-if="talentDescription(character.talents[1])" class="description">
                                {{ talentDescription(character.talents[1]) }}
                            </div>
                        </div>
                        <template v-if="!character.talents?.[0] && !character.talents?.[1]">
                            {{ $t("form.step4.not_set") }}
                        </template>
                    </td>
                </tr>
            </table>
            <hr />
            <table class="details-table">
                <tr>
                    <td>{{ $t("form.step4.height") }}</td>
                    <td>{{ lookText("height", character.height) }}</td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.hair_color") }}</td>
                    <td>{{ lookText("hair_color", character.hairColor) }}</td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.body_build") }}</td>
                    <td>{{ lookText("body_build", character.bodyBuild) }}</td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.hair_type") }}</td>
                    <td>{{ lookText("hair_type", character.hairType) }}</td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.skin") }}</td>
                    <td>{{ lookText("skin", character.skin) }}</td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.hairstyle") }}</td>
                    <td>{{ lookText("hairstyle", character.hairstyle) }}</td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.facial_hair") }}</td>
                    <td>{{ lookText("facial_hair", character.facialHair) }}</td>
                </tr>
            </table>
            <hr />
            <table class="details-table">
                <tr>
                    <td>{{ $t("form.step4.misfortune") }}</td>
                    <td>{{ valueText("warlock.misfortune", character.misfortune) }}</td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.keepsake") }}</td>
                    <td>
                        <div>{{ keyedText("warlock.keepsake", character.keepsake) }}</div>
                        <div v-if="character.keepsake" class="description">
                            {{ describedText("warlock.keepsake", character.keepsake) }}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.where_from") }}</td>
                    <td>
                        <div>{{ keyedText("warlock.where_from", character.whereFrom) }}</div>
                        <div v-if="character.whereFrom" class="description">
                            {{ describedText("warlock.where_from", character.whereFrom) }}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.travel_reason") }}</td>
                    <td>
                        <div>{{ keyedText("warlock.travel_reason", character.travelReason) }}</div>
                        <div v-if="character.travelReason" class="description">
                            {{ describedText("warlock.travel_reason", character.travelReason) }}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.how_we_met") }}</td>
                    <td>
                        <div>{{ keyedText("warlock.how_we_met", character.howWeMet) }}</div>
                        <div v-if="character.howWeMet" class="description">
                            {{ describedText("warlock.how_we_met", character.howWeMet) }}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.dark_secret") }}</td>
                    <td>
                        <div>{{ keyedText("warlock.dark_secret", character.darkSecret) }}</div>
                        <div v-if="character.darkSecret" class="description">
                            {{ describedText("warlock.dark_secret", character.darkSecret) }}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.farewell") }}</td>
                    <td>
                        <div>{{ keyedText("warlock.farewell", character.farewell) }}</div>
                        <div v-if="character.farewell" class="description">
                            {{ describedText("warlock.farewell", character.farewell) }}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.who_you_know") }}</td>
                    <td>
                        <div>{{ keyedText("warlock.who_you_know", character.whoYouKnow) }}</div>
                        <div v-if="character.whoYouKnow" class="description">
                            {{ describedText("warlock.who_you_know", character.whoYouKnow) }}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.passions") }}</td>
                    <td>
                        <div v-html="passionsText"></div>
                        <div v-if="character.passionPositive" class="description">
                            {{ describedText("warlock.passions.positive", character.passionPositive) }}
                        </div>
                        <div v-if="character.passionNegative" class="description">
                            {{ describedText("warlock.passions.negative", character.passionNegative) }}
                        </div>
                    </td>
                </tr>
            </table>
            <hr />
            <div class="skills-block">
                <div class="skills-title">{{ $t("form.step1.initial_skills_header") }}</div>
                <table class="details-table">
                    <tr v-for="skill in sortedCharacterSkills" :key="skill.name">
                        <td>{{ $t(`skill.${skill.name}`) }}</td>
                        <td>{{ skill.value }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </details>
</template>

<script setup>
import { RiDeleteBinLine } from "@remixicon/vue";
import { sortedSkills as sortSkills } from "@/core/helpers";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
    character: {
        type: Object,
        required: true,
    },
    forceOpen: {
        type: Boolean,
        default: false,
    },
    removable: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["remove"]);

const { t } = useI18n();

const fallback = () => t("form.step4.not_set");
const talentLabel = (key) => {
    if (!key) return fallback();
    const richPath = `warlock.talents.${key}.key`;
    const richValue = t(richPath);
    return richValue === richPath ? t(`warlock.talents.${key}`) : richValue;
};
const talentDescription = (key) => {
    if (!key) return null;
    const path = `warlock.talents.${key}.description`;
    const value = t(path);
    return value === path ? null : value;
};
const lookText = (group, key) => (key ? t(`warlock.looks.${group}.${key}`) : fallback());
const valueText = (group, key) => (key ? t(`${group}.${key}`) : fallback());
const keyedText = (group, key) => (key ? t(`${group}.${key}.key`) : fallback());
const describedText = (group, key) => {
    if (!key) return null;
    const value = t(`${group}.${key}.description`);
    return value === `${group}.${key}.description` ? null : value;
};

const passionsText = computed(() => {
    const positive = props.character.passionPositive
        ? `${t("form.step4.positive")}: ${t(`warlock.passions.positive.${props.character.passionPositive}.key`)}`
        : null;
    const negative = props.character.passionNegative
        ? `${t("form.step4.negative")}: ${t(`warlock.passions.negative.${props.character.passionNegative}.key`)}`
        : null;
    return [positive, negative].filter(Boolean).join(" <br> ") || fallback();
});

const sortedCharacterSkills = computed(() => sortSkills(props.character.skills || [], t));
</script>

<style lang="scss" scoped>
.saved-card {
    background: var(--nonSelectBg);
    border: 1px solid rgb(255 255 255 / 0.08);
    border-radius: var(--mainRadius);
}

.saved-card summary {
    list-style: none;
    cursor: pointer;
    padding: 1rem;
    position: relative;
}

.saved-card summary::-webkit-details-marker {
    display: none;
}

.saved-card-title {
    font-size: 1.1rem;
    font-weight: 700;
}

.saved-card-meta {
    opacity: 0.8;
    margin-top: 0.25rem;
}

.remove-button {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    width: 2rem;
    height: 2rem;
    border: none;
    background: rgb(185 42 42 / 0.48);
    color: rgb(255 232 232);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    font-size: 1.1rem;
}

.remove-button:hover {
    background: rgb(145 44 44 / 0.24);
    color: rgb(255 214 214);
}

.saved-card-body {
    padding: 0 1rem 1rem;
}

.details-table {
    width: 100%;
    border-collapse: collapse;
    // display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 768px) {
        // grid-template-columns: 1fr 1fr;
    }

    + hr {
        opacity: 0.1;
        margin-block: 0.3rem;
    }

    tr {
        width: 100%;
        // display: flex;
        gap: 0.5rem;

        &:nth-child(odd) {
            background: rgb(255 255 255 / 0.08);
        }
    }

    td {
        // display: inline-flex;
        padding: 0.05rem;
        vertical-align: top;
        &:first-child {
            font-weight: 700;
            width: 38%;

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

.skills-block {
    margin-top: 0.5rem;

    tr:nth-child(odd) {
        background: transparent;
    }

    .details-table {
        display: grid;

        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }

        tr {
            display: flex;
        }

        td {
            display: inline-flex;
        }
    }
}

.skills-title {
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.description {
    font-size: 0.9em;
    opacity: 0.9;
}
</style>
