//Imports the different views it renders in the app, and user history components
import { createRouter, createWebHistory } from "vue-router"
import Login from "./views/Login.vue"
import Questions from "./views/Questions.vue"
import Result from "./views/Result.vue"

//The different components that render in the view, and a file path to render then in an url fetch
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

//The web history for the user when using the site
export default createRouter({
    history: createWebHistory(),
    routes
})
