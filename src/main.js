import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/plugins/i18n'
import FlagIcon from 'vue-flag-icon';

createApp(App).use(i18n).use(FlagIcon).mount('#app')
