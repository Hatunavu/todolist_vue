import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/plugins/i18n'
import FlagIcon from 'vue-flag-icon'
import router from '@/plugins/router'

const app = createApp(App)

app.use(i18n)
app.use(FlagIcon)
app.use(router)

app.mount('#app')


