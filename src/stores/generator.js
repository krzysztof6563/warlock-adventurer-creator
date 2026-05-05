import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGeneratorStore = defineStore('generator', {
  state: () => (
    {
      skills: [],
      societies: [],
      professions: [],
      creator: {
        sixPointsLeft: 10,
        fivePointsLeft: 10,
        stamina: null,
        luck: null,
        courage: null,
        step1Completed: false
      },
      adventurer: {}
    }
  ),
})