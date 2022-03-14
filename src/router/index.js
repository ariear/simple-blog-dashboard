import { createRouter , createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/posts',
        component: Posts
    }
]

const router = createRouter({
    'history' : createWebHistory(),
    routes,
    'linkActiveClass': 'font-bold'
})

export default router