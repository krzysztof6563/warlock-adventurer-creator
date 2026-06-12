import { defineStore } from "pinia";

const STORAGE_KEY = "warlock-saved-characters";

export const useWalockStorageStore = defineStore("warlockStorage", {
    state: () => ({
        characters: [],
        initialized: false,
    }),
    actions: {
        init() {
            if (this.initialized || typeof window === "undefined") {
                return;
            }

            const raw = window.localStorage.getItem(STORAGE_KEY);

            if (!raw) {
                this.initialized = true;
                return;
            }

            try {
                const parsed = JSON.parse(raw);
                this.characters = Array.isArray(parsed) ? parsed : [];
            } catch {
                this.characters = [];
            }

            this.initialized = true;
        },
        persist() {
            if (typeof window === "undefined") {
                return;
            }

            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.characters));
        },
        saveCharacter(adventurer) {
            const snapshot = JSON.parse(JSON.stringify(adventurer));
            const id =
                typeof crypto !== "undefined" && crypto.randomUUID
                    ? crypto.randomUUID()
                    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

            this.characters.unshift({
                id,
                savedAt: new Date().toISOString(),
                ...snapshot,
            });
            this.persist();
        },
        removeCharacter(id) {
            this.characters = this.characters.filter((character) => character.id !== id);
            this.persist();
        },
    },
});
