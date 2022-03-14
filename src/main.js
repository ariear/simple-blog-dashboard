import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './index.css'
import router from './router'

const store = createStore({
    state() {
        return {
            sidebarmobile: false
        }
    }
})

createApp(App).use(store).use(router).mount('#app')
