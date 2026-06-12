import { defineStore } from "pinia";

export const useWalockStorageStore = defineStore("warlockStorage", {
    state: () => ({
        skills: [],
        societies: [],
        professions: [],
        talents: [],
        looksTables: {},
        misfortune: [],
        keepsake: [],
        whereFrom: [],
        travelReason: [],
        howWeMet: [],
        darkSecret: [],
        farewell: [],
        whoYouKnow: [],
        passions: [],
        creator: {
            sixPointsLeft: 10,
            fivePointsLeft: 10,
            stamina: null,
            luck: null,
            courage: null,
            stepCompleted: 0,
        },
        adventurer: {
            name: "",
        },
    }),
});
