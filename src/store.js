import { createStore } from "vuex";
import { apiFetchQuestions } from "./api/questions";

export default createStore({
    state:{
        questions:[]
    },
    mutations: {
        setQuestions: (state, questions) => {
            state.questions = questions
        }
    },
    actions: {
        // async fetchQuestions: ({commit}, questions) => {
        //     const [ error, movies] = await apiFetchQuestions()
        // }
    }
})