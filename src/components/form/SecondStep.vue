<template>
    <div class="card">
        <button class="btn btn-primary" @click="rollAll">Losuj</button>
        <div class="grid-2x">
            <div class="form-input">
                <label for="" class="form-label">{{ $t('adventurer.stamina') }}</label>
                <div style="display: flex; gap: .5rem">
                    <span style="cursor: pointer;" @click="adventurer.stamina = roll('2k6+12')">🎲</span>
                    <input readonly class="form-input" type="number" v-model="adventurer.stamina" />
                </div>
            </div>
            <div class="form-input">
                <label for="society" class="form-label">{{ $t('adventurer.society') }}</label>
                <div style="display: flex; gap: .5rem">
                    <select name="society" id="society" v-model="adventurer.society">
                        <option :value="society" class="capitalize" v-for="society in generatorStore.societies">
                            {{
                                $t(`society.${society}`) }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="form-input">
                <label for="luck" class="form-label">{{ $t('adventurer.luck') }}</label>
                <div style="display: flex; gap: .5rem">
                    <span style="cursor: pointer;" @click="adventurer.luck = roll('1k6+7')">🎲</span>
                    <input readonly name="luck" id="luck" class="form-input" type="number" v-model="adventurer.luck" />
                </div>
            </div>
            <div class="form-input">
                <label for="courage" class="form-label">{{ $t('adventurer.courage') }}</label>
                <div style="display: flex; gap: .5rem">
                    <input readonly name="courage" id="courage" class="form-input" type="number"
                        v-model="adventurer.courage" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useGeneratorStore } from '@/stores/generator';
import roll from '@/core/roll';

const generatorStore = useGeneratorStore();
const adventurer = generatorStore.adventurer;

const rollAll = () => {
    adventurer.stamina = roll('2k6+12')
    adventurer.luck = roll('1k6+7')
}
</script>