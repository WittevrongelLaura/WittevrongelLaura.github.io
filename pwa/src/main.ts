import { createApp, App as VueApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import router from './bootstrap/router'
import useAuthentication from './composables/useAuthentication'
import useI18n from './composables/useI18n'

const app:VueApp = createApp(App)

const {restoreUser} = useAuthentication()


const { i18n } = useI18n()

;(async function () {
  await restoreUser()

  app.use(i18n)
  app.use(router)
  app.mount('#app')
})()
