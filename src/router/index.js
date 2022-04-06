import { createRouter, createWebHistory } from 'vue-router'
import register from '../views/Register.vue'

const routes = [
    {
        path: '/',
        name: 'register',
        component: register
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
