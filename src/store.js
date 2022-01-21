import { createStore } from "vuex";

export default createStore({
    state:{
        questions:[]
    },
    mutations: {
        setQuestions: (state, questions) => {
            state.questions = questions
        }
    }
})