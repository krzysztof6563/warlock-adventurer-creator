import { createI18n } from 'vue-i18n'
import localePL from "./pl.js";
import localeEN from "./en.js";


export default createI18n({
    legacy: false, // you must specify 'legacy: false' option
    locale: 'pl',
    messages: {
        pl: localePL,
        en: localeEN
    }
})