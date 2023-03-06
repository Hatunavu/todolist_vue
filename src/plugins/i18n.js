import { createI18n } from 'vue-i18n';

const i18n = createI18n ({
    locale: 'vi',
    fallbackLocale: 'vi',
    messages: {
        en: require('@/locales/en.json'),
        vi: require('@/locales/vi.json'),
    }
})

export default i18n;