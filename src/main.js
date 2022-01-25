//Imports main components for the app to function
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'

//Creates the app with it main components
createApp(App)
.use(router)
.use(store)
.mount('#app')

