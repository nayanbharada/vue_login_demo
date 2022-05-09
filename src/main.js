import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// import store from "./store";
// import * as Vue from 'vue' // in Vue 3
// import axios from 'axios'
// import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.min.css'
 
// Vue.config.productionTip = false


// createApp(App).use(router).use(store).use(axios).mount('#app')
// createApp(App).use(router).use(createPinia()).mount('#app')
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

