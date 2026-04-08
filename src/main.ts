import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.mount('#app')


import router from './router'
import './assets/main.css'



app.use(createPinia())
app.use(router)



