import { createRouter, createWebHistory } from "vue-router"
import Login from "./views/Login.vue"
import Questions from "./views/Questions.vue"
import Result from "./views/Result.vue"

const routes = [
    {
        path: "/",
        component: Login
    },
    {
        path: "/questions",
        component: Questions
    },
    {
        path: "/result",
        component: Result
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
