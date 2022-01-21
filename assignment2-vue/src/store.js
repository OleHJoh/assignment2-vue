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
            console.log("before apiUserLogin")
            try {
                const newUser = await apiUserLogin(username)
                console.log(newUser)
                console.log("inside apiUserLogin")

                if (error !== null) {
                    throw new Error(error)
                }
                
                localStorage.setItem("test-username", JSON.stringify(newUser))
                commit("setUsername", newUser.username)

                return null
            }
            catch (e) {
                return e.message
            }
        }
    }
})