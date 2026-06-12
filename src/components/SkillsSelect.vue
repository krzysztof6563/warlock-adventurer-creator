<template>
    <div class="flex-between">
        <div class="flex-column">
            <h2 style="margin-bottom: 0">{{ $t("form.step1.initial_skills_header") }}</h2>
            <div>
                <button class="btn" @click="rollSkills">{{ $t("form.step4.roll") }}</button>
                <span> lub wybierz</span>
            </div>
        </div>
        <div>
            <div>
                {{ $t("skillselect.six_points_left", { number: generatorStore.creator.sixPointsLeft }) }}
            </div>
            <div>
                {{ $t("skillselect.five_points_left", { number: generatorStore.creator.fivePointsLeft }) }}
            </div>
        </div>
    </div>
    <div class="skills-wrap">
        <div class="skill" v-for="skill in generatorStore.adventurer.initialSkills">
            <div class="name">
                {{ $t(`skill.${skill.name}`) }}
            </div>
            <div class="selector">
                <div @click="setSkillValue(skill.name, 6)" class="cursor-pointer">
                    <div>6</div>
                    <button
                        :class="{ checked: generatorStore.adventurer.getInitialSkillValue(skill.name) == 6 }"
                    ></button>
                </div>
                <div @click="setSkillValue(skill.name, 5)" class="cursor-pointer">
                    <div>5</div>
                    <button
                        :class="{ checked: generatorStore.adventurer.getInitialSkillValue(skill.name) == 5 }"
                    ></button>
                </div>

                <div>
                    <div>4</div>
                    <button
                        :class="{ checked: generatorStore.adventurer.getInitialSkillValue(skill.name) == 4 }"
                    ></button>
                </div>
            </div>
            <!-- <div class="current">
                {{ generatorStore.adventurer.getInitialSkillValue(skill.name) }}
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { timeoutScrollToElement } from "@/core/helpers";
import { getRandomInt } from "@/core/roll";
import { useWalockGeneratorStore } from "@/stores/warlock-generator";
import { watch } from "vue";

const generatorStore = useWalockGeneratorStore();
const adventurer = generatorStore.adventurer;

const setSkillValue = (name, newValue) => {
    let currentValue = adventurer.getInitialSkillValue(name);

    if (
        (newValue == 5 && generatorStore.creator.fivePointsLeft <= 0 && currentValue != 5) ||
        (newValue == 6 && generatorStore.creator.sixPointsLeft <= 0 && currentValue != 6)
    ) {
        return;
    }

    if (currentValue == 6 && newValue == 6) {
        generatorStore.creator.sixPointsLeft += 1;
        adventurer.setInitialSkillValue(name, 0);
    }
    if (currentValue == 5 && newValue == 5) {
        generatorStore.creator.fivePointsLeft += 1;
        adventurer.setInitialSkillValue(name, 0);
    }
    if (currentValue == 0 && newValue == 6) {
        generatorStore.creator.sixPointsLeft -= 1;
        adventurer.setInitialSkillValue(name, newValue);
    }
    if (currentValue == 0 && newValue == 5) {
        generatorStore.creator.fivePointsLeft -= 1;
        adventurer.setInitialSkillValue(name, newValue);
    }
    if (currentValue == 5 && newValue == 6) {
        generatorStore.creator.fivePointsLeft += 1;
        generatorStore.creator.sixPointsLeft -= 1;
        adventurer.setInitialSkillValue(name, newValue);
    }
    if (currentValue == 6 && newValue == 5) {
        generatorStore.creator.sixPointsLeft += 1;
        generatorStore.creator.fivePointsLeft -= 1;
        adventurer.setInitialSkillValue(name, newValue);
    }
};

watch(
    () => ({
        fivePointsLeft: generatorStore.creator.fivePointsLeft,
        sixPointsLeft: generatorStore.creator.sixPointsLeft,
    }),
    (newValue, oldValue) => {
        if (adventurer.profession) {
            adventurer.setSkillsBasedOnProfession(adventurer.profession);
        }
        if (newValue.fivePointsLeft == 0 && newValue.sixPointsLeft == 0) {
            for (const skill of adventurer.initialSkills) {
                if (skill.value == 0) {
                    skill.value = 4;
                }
            }
            generatorStore.creator.step1Completed = true;
            generatorStore.creator.stepCompleted = Math.max(1, generatorStore.creator.stepCompleted);
        } else {
            for (const skill of adventurer.initialSkills) {
                if (skill.value == 4) {
                    skill.value = 0;
                }
            }
            generatorStore.creator.step1Completed = false;
        }
    },
);

const rollSkills = () => {
    const length = generatorStore.adventurer.initialSkills.length;
    let fivePointsIndexes = [];
    let sixPointsIndexes = [];
    generatorStore.creator.sixPointsLeft = 0;
    generatorStore.creator.fivePointsLeft = 0;
    generatorStore.creator.stepCompleted = Math.max(1, generatorStore.creator.stepCompleted);

    generatorStore.adventurer.initialSkills.forEach((element) => {
        adventurer.setInitialSkillValue(element.name, 4);
    });

    while (fivePointsIndexes.length < 10) {
        let randIndex = getRandomInt(length);
        if (!(fivePointsIndexes.includes(randIndex) || sixPointsIndexes.includes(randIndex))) {
            fivePointsIndexes.push(randIndex);
            adventurer.setInitialSkillValue(generatorStore.adventurer.initialSkills[randIndex].name, 5);
        }
    }
    while (sixPointsIndexes.length < 10) {
        let randIndex = getRandomInt(length);
        if (!(fivePointsIndexes.includes(randIndex) || sixPointsIndexes.includes(randIndex))) {
            sixPointsIndexes.push(randIndex);
            adventurer.setInitialSkillValue(generatorStore.adventurer.initialSkills[randIndex].name, 6);
        }
    }

    timeoutScrollToElement("#second-step");
};
</script>

<style lang="scss" scoped>
.flex-between {
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {
        flex-wrap: nowrap;
    }
}
.skills-wrap {
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
}

.skill {
    display: flex;
    gap: 2rem;
    align-items: flex-end;
    padding-inline: 0.4rem;

    @media screen and (min-width: 768px) {
        gap: 1rem;
    }

    &:hover {
        background: var(--hoverBg);
    }

    .name {
        width: 8rem;
        text-transform: capitalize;
        align-self: center;
    }

    .selector {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1rem;
        text-align: center;

        @media screen and (min-width: 768px) {
            column-gap: 0.5rem;
        }

        button {
            --size: 1.25rem;
            height: var(--size);
            width: var(--size);
            cursor: pointer;

            @media screen and (min-width: 768px) {
                --size: 1rem;
            }

            &.checked {
                background: hsl(60, 34%, 60%);
                border-color: #313131;
            }
        }
    }
}
</style>
