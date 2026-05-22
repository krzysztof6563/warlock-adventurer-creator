<template>
    <div class="card" style="top: 1rem; position: sticky">
        <div class="name">
            <strong>{{ $t("name") }}</strong
            >: {{ adventurer.name }}
        </div>
        <div class="profession">
            <strong>{{ $t("profession_label") }}</strong
            >:
            <template v-if="adventurer.profession">{{ $t(`profession.${adventurer.profession.name}`) }}</template>
        </div>
        <div class="skills" style="margin-top: 0.5rem">
            <table>
                <tr v-for="skill in sortedSkills">
                    <td>{{ $t(`skill.${skill.name}`) }}</td>
                    <td>{{ skill.value }}</td>
                </tr>
            </table>
        </div>

        <div class="step4-summary" style="margin-top: 0.75rem">
            <div>
                <strong>{{ $t("form.step4.title") }}</strong>
            </div>
            <table>
                <tr>
                    <td>{{ $t("form.step4.talents") }}</td>
                    <td>{{ step4TalentText }}</td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.height") }}</td>
                    <td>{{ step4.height ? $t(`warlock.looks.height.${step4.height}`) : $t("form.step4.not_set") }}</td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.hair_color") }}</td>
                    <td>
                        {{
                            step4.hairColor
                                ? $t(`warlock.looks.hair_color.${step4.hairColor}`)
                                : $t("form.step4.not_set")
                        }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.body_build") }}</td>
                    <td>
                        {{
                            step4.bodyBuild
                                ? $t(`warlock.looks.body_build.${step4.bodyBuild}`)
                                : $t("form.step4.not_set")
                        }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.hair_type") }}</td>
                    <td>
                        {{
                            step4.hairType ? $t(`warlock.looks.hair_type.${step4.hairType}`) : $t("form.step4.not_set")
                        }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.skin") }}</td>
                    <td>{{ step4.skin ? $t(`warlock.looks.skin.${step4.skin}`) : $t("form.step4.not_set") }}</td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.hairstyle") }}</td>
                    <td>
                        {{
                            step4.hairstyle
                                ? $t(`warlock.looks.hairstyle.${step4.hairstyle}`)
                                : $t("form.step4.not_set")
                        }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.facial_hair") }}</td>
                    <td>
                        {{
                            step4.facialHair
                                ? $t(`warlock.looks.facial_hair.${step4.facialHair}`)
                                : $t("form.step4.not_set")
                        }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.misfortune") }}</td>
                    <td>
                        {{ step4.misfortune ? $t(`warlock.misfortune.${step4.misfortune}`) : $t("form.step4.not_set") }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.keepsake") }}</td>
                    <td>
                        {{ step4.keepsake ? $t(`warlock.keepsake.${step4.keepsake}.key`) : $t("form.step4.not_set") }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.where_from") }}</td>
                    <td>
                        {{
                            step4.whereFrom ? $t(`warlock.where_from.${step4.whereFrom}.key`) : $t("form.step4.not_set")
                        }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.travel_reason") }}</td>
                    <td>
                        {{
                            step4.travelReason
                                ? $t(`warlock.travel_reason.${step4.travelReason}.key`)
                                : $t("form.step4.not_set")
                        }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.how_we_met") }}</td>
                    <td>
                        {{ step4.howWeMet ? $t(`warlock.how_we_met.${step4.howWeMet}.key`) : $t("form.step4.not_set") }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.dark_secret") }}</td>
                    <td>
                        {{
                            step4.darkSecret
                                ? $t(`warlock.dark_secret.${step4.darkSecret}.key`)
                                : $t("form.step4.not_set")
                        }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.farewell") }}</td>
                    <td>
                        {{ step4.farewell ? $t(`warlock.farewell.${step4.farewell}.key`) : $t("form.step4.not_set") }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.who_you_know") }}</td>
                    <td>
                        {{
                            step4.whoYouKnow
                                ? $t(`warlock.who_you_know.${step4.whoYouKnow}.key`)
                                : $t("form.step4.not_set")
                        }}
                    </td>
                </tr>
                <tr>
                    <td>{{ $t("form.step4.passions") }}</td>
                    <td v-html="step4PassionsText"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useGeneratorStore } from "@/stores/generator";
import { sortedSkills as sortSkills } from "@/core/helpers";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const generatorStore = useGeneratorStore();
const adventurer = generatorStore.adventurer;
const step4 = generatorStore.adventurer;
const { t } = useI18n();

const sortedSkills = computed(() => sortSkills(adventurer.skills, t));
const talentLabel = (key) => {
    const path = `warlock.talents.${key}.key`;
    const value = t(path);
    return value === path ? t(`warlock.talents.${key}`) : value;
};
const step4TalentText = computed(() => {
    const first = step4.talents?.[0] ? talentLabel(step4.talents[0]) : null;
    const second = step4.talents?.[1] ? talentLabel(step4.talents[1]) : null;
    return [first, second].filter(Boolean).join(", ") || t("form.step4.not_set");
});

const step4PassionsText = computed(() => {
    const positive = step4.passionPositive
        ? `${t("form.step4.positive")}: ${t(`warlock.passions.positive.${step4.passionPositive}.key`)}`
        : null;
    const negative = step4.passionNegative
        ? `${t("form.step4.negative")}: ${t(`warlock.passions.negative.${step4.passionNegative}.key`)}`
        : null;
    return [positive, negative].filter(Boolean).join("<br/>") || t("form.step4.not_set");
});
</script>

<style lang="scss" scoped>
.card {
    > div {
        text-transform: capitalize;
    }
}

table {
    line-height: 1.05;
}

.skills,
.step4-summary {
    table {
        width: 100%;

        tr {
            // background: rgb(255 255 255 / 0.1);

            &:nth-child(odd) {
                background: rgb(255 255 255 / 0.05);
            }
            &:hover {
                background: var(--hoverBg);
            }

            td {
                padding: 0.2rem;

                &:first-child {
                    font-weight: 600;
                }

                &:last-child {
                    text-align: right;
                }
            }
        }
    }
}

.step4-summary {
    td {
        text-transform: initial;
        vertical-align: top;
    }
}
</style>
