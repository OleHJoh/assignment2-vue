import { createStore } from 'vuex'
import { apiUserLogin } from "./api/user"
import { apiGetUserScores } from './api/user'
import { apiFetchQuestions } from "./api/questions";

export default createStore({

    state: {
        username: "",
        highestScore: 0,
        error: "",
        questions:[]
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
        }
        // async fetchQuestions: ({commit}, questions) => {
        //     const [ error, movies] = await apiFetchQuestions()
        // }
    }
})