import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WarlockCharacterFormView from "../views/WarlockCharacterFormView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "HomeView",
            component: HomeView,
        },
        {
            path: "/warlock-form",
            name: "WarlockCharacterForm",
            component: WarlockCharacterFormView,
        },
    ],
});

export default router;
