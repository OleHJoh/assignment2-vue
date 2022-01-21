import { createStore } from 'vuex'

export default createStore({

    state: {
        username: "",
        error: ""
    },
    mutations: {
        setUsername: (state, username) => {
            state.username = username
        },
    },
    actions: {
        saveUsername: ({ commit }, username) => {
            localStorage.setItem("test-username", username)
            commit("setUsername", username)
        }
    }
})