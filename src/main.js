import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

Math.randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
