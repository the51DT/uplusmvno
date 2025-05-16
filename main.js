/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './app.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
// import front from "./assets/js/front"
import front from "@/composables/front.js"
import Vue3Lottie from 'vue3-lottie'
// import "./assets/css/style.css";


const app = createApp(App)
registerPlugins(app)

app
.use(Vue3Lottie)
.use(front)
.mount('#app')
