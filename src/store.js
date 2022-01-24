import { createStore } from 'vuex'
import { apiGetUser } from './api/user'
import { apiRegisterNewUser } from "./api/user"
import { apiUpdateHighScore } from "./api/user"
import { apiFetchQuestions } from "./api/questions";
import { apiFetchCategories } from './api/categories';

export default createStore({

    state: {
        username: "",
        highScore: 0,
        userId: 0,
        error: "",
        questions:[],
        categories:[],
        result: 0,
        answers: []
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
        },
        setCategories: (state, categories) => {
            state.categories = categories
        },
        setResult: (state, result) => {
            state.result = result
        },
        setAnswers: (state, answers) => {
            state.answers = answers
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
                return e.message
            }
        },
        async fetchQuestions({ commit, dispatch },config) {
            try{
                console.log(config)
                const quantity = config[0]
                const category = config[1]
                const difficulty = config[2]
                const type = config[3]

                const questions = await apiFetchQuestions(quantity,category,difficulty,type)
                
                
                commit("setQuestions", questions)
                dispatch("createAnswers", questions)
                localStorage.setItem("questions", questions)
                return null
            }
            catch (e){
                return e.message
            }
        },
        async fetchCategories({commit}) {
            const categories = await apiFetchCategories()
            
            
            commit("setCategories", categories)
            localStorage.setItem("categories", categories)
            return null
        },
        createAnswers({commit, state}, questions){
            answers.push(questions[state.currentQuestionIdx].correct_answer)
            answers.push(questions[state.currentQuestionIdx].incorrect_answers)
        }
    }
})