import { createStore } from 'vuex'
import { apiUserLogin } from "./api/user"
import { apiGetUserScores } from './api/user'
import { apiFetchQuestions } from "./api/questions";
import { apiFetchCategories } from './api/categories';

export default createStore({

    state: {
        username: "",
        highestScore: 0,
        error: "",
        questions:[],
        categories:[]
    },
    mutations: {
        setUsername: (state, username) => {
            state.username = username
        },
        setHighestScore: (state, highest) => {
            state.highestScore = highest
        },
        setQuestions: (state, questions) => {
            state.questions = questions
        },
        setCategories: (state, categories) => {
            state.categories = categories
        }
    },
    actions: {
        async saveUsername({ commit }, username) {
            try {
                const newUser = await apiUserLogin(username)
                commit("setUsername", newUser.username)
                localStorage.setItem("test-username", newUser.username)

                return null
            }
            catch (e) {
                return e.message
            }
        },
        async getHighestScore({ commit }, username) {
            try {
                const users = await apiGetUserScores(username)                
                const scores = users.map(user => parseInt(user.highScore))
                const highest = Math.max(...scores)

                commit("setHighestScore", highest)

                return null
            }
            catch (e) {
                return e
            }
        },
        async fetchQuestions({commit}) {
            const questions = await apiFetchQuestions(10,0,0,0)
            
            
            commit("setQuestions", questions)
            localStorage.setItem("questions", questions)
            return null
        },
        async fetchCategories({commit}) {
            const categories = await apiFetchCategories()
            
            
            commit("setCategories", categories)
            localStorage.setItem("categories", categories)
            return null
        }
    }
})