import { createStore } from 'vuex'
import { apiGetUser } from './api/user'
import { apiRegisterNewUser } from "./api/user"
import { apiUpdateHighScore } from "./api/user"
import { apiFetchQuestions } from "./api/questions";

export default createStore({

    state: {
        username: "",
        highScore: 0,
        userId: 0,
        error: "",
        questions:[]
    },
    mutations: {
        setUsername: (state, username) => {
            state.username = username
        },
        setHighScore: (state, highScore) => {
            state.highScore = highScore
        },
        setUserId: (state, id) => {
            state.userId = id
        },
        setQuestions: (state, questions) => {
            state.questions = questions
        }
    },
    actions: {
        async userLogin({ commit }, username) {
            try {
                const user = await apiGetUser(username)                
                if (user.length !== 0) { // user with username already exists 
                    commit("setUsername", user[0].username)
                    commit("setHighScore", user[0].highScore)
                    commit("setUserId", user[0].id)
                }
                else { // new user
                    const newUser = await apiRegisterNewUser(username)
                    commit("setUsername", newUser.username)
                }
                return null
            }
            catch (e) {
                return e
            }
        },
        async updateHighScore({ commit, state }, newHighScore) {
            try {
                const updatedUser = await apiUpdateHighScore(newHighScore, state.userId)
                if (updatedUser === null) {
                    throw new Error("Could not update the highscore")
                }
                commit("setHighScore", newHighScore)

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