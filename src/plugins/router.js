import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import CreateTodo from '@/components/CreateTodo.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/create',
        name: 'create',
        component: CreateTodo
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router     