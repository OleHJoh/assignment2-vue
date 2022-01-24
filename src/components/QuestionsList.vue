<script setup>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import QuestionsListItem from '../components/QuestionsListItem.vue'

    const store = useStore()
    const questions = computed(() => store.state.questions)
    console.log(questions.value)
    let score = 0
    let instance = 0
    let answers = computed(() => store.state.answers)
    let correct = ""
    console.log(answers.value)

    const onSubmit = () => {

    }

    const convertAnswers = () => {

        answers.push(questions[instance].correct_answer)
        answers.push(questions[instance].incorrect_answers)
        correct = answers[0]
        console.log(correct)
    }

    //onMounted(convertAnswers)

</script>
<template>
    <p>{{questions[instance].question}}</p>
    <select name="answers" id="answer" v-for="question in questions" :key="question.id">
        <option v-for="answer in question.incorrect_answers" :value="answer" :key="answer.id">{{ answer }}</option>
        <option :value="question.correct_answer" :key="question.id">{{question.correct_answer}}</option>
    </select>
    <br>
    <button type="button" @click="onSubmit">Submit</button>
</template>