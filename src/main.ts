import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript

const app = createApp(App)

app.use(router)

app.mount('#app')
