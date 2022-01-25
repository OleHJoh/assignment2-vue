//Imports the different components used
import { createStore } from 'vuex'
import { apiGetUser } from './api/user'
import { apiRegisterNewUser } from "./api/user"
import { apiUpdateHighScore } from "./api/user"
import { apiFetchQuestions } from "./api/questions";
import { apiFetchCategories } from './api/categories';

//Function for store create
export default createStore({

    //The different values store contained, and remembers
    state: {
        username: "",
        highScore: 0,
        userId: 0,
        error: "",
        questions:[],
        categories:[],
        usersAnswers: []
    },
    //FUnction for changing the values in state
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
        setUsersAnswers: (state, usersAnswers) => {
            state.usersAnswers = usersAnswers
        }
    },
    //Function for getting a value from store state
    getters: {
        //Sends the length of the questions array
        getQuestionsSize: (state) => {
            return state.questions.length
        }
    },
    //Actions store can preform when called from other views or components
    actions: {
        //Function for registration of a user
        async userLogin({ commit }, username) {
            try {
                //fetch call to the user api
                const user = await apiGetUser(username)                
                if (user.length !== 0) { // user with username already exists 
                    commit("setUsername", user[0].username)
                    commit("setHighScore", user[0].highScore)
                    commit("setUserId", user[0].id)
                }
                else { // new user
                    const newUser = await apiRegisterNewUser(username)
                    commit("setUsername", newUser.username)
                    commit("setHighScore", newUser.highScore)
                    commit("setUserId", newUser.id)
                }
                return null
            }
            catch (e) {
                return e
            }
        },
        //Function for updating the highscore of the logged in user
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
        //FUnction for fetching the questions from the question api
        async fetchQuestions({ commit },config) {
            try{
                console.log(config)
                const quantity = config[0]
                const category = config[1]
                const difficulty = config[2]
                const type = config[3]

                const questions = await apiFetchQuestions(quantity,category,difficulty,type)

                let questionsWithAnswers = questions.map(question => {
                const answers = [question.correct_answer, ...question.incorrect_answers]
    
                return {
                ...question,
                answers
                }
                })
  
                commit("setQuestions", questionsWithAnswers)
                localStorage.setItem("questions", questionsWithAnswers)
                return null
            }
            catch (e){
                return e.message
            }
        },
        //Function for fetching the different catagories available
        async fetchCategories({commit}) {
            const categories = await apiFetchCategories()
            
            commit("setCategories", categories)
            localStorage.setItem("categories", categories)
            return null
        },
        setUsersAnswersToResult({commit}, usersAnswers) {
            commit("setUsersAnswers", usersAnswers)
        }
    }
})