import { createStore } from 'vuex'
import { apiUserLogin } from "./api/user"

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
        async saveUsername({ commit }, username) {
            try {
                const newUser = await apiUserLogin(username)
                commit("setUsername", newUser.username)

                return null
            }
            catch (e) {
                return e.message
            }
        }
    }
})