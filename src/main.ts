import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia"
import 'normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
const pinia = createPinia()

const app = createApp(App)


app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
