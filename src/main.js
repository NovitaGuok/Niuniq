import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import vueScrollto from 'vue-scrollto'

createApp(App).use(Router).use(vueScrollto).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
