import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

// https://vite.dev/config/
export default defineConfig({
    base: isGithubActions ? '/warlock-adventurer-creator/' : '/',
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
