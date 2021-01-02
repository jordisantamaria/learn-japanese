import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18njp from '../i18n/i18n-jp.yaml';
import i18nen from '../i18n/i18n-en.yaml';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'ja',
    fallbackLocale: 'ja', //if missing locale in some language, show japanese version
    silentTranslationWarn: process.env.NODE_ENV === 'production',
    messages: {
        ja: {
            ...i18njp,
        },
        en: {
            ...i18nen,
        },
    },
});

export { i18n };
