<script setup>
import {computed, onRenderTriggered} from 'vue'
import {useStore} from 'vuex'
import QuestionsListItem from '../components/QuestionsListItem.vue'

    const questions = computed(() => store.state.questions)
    const store = useStore()
    let score = 0
    let instance = 0
    let answers = []
    let correct = ""

    const onSubmit = () => {

    }

    onRenderTriggered(() => {
        setTimeout(function(){
            console.log("Test time out")
        }, 5000)
    })

    const convertAnswers = () => {

        answers.push(questions[instance].correct_answer)
        answers.push(questions[instance].incorrect_answers)
        correct = answers[0]
        console.log(correct)
    }

</script>
<template>
    <p>{{questions[instance].questions}}</p>
    <form>
        <QuestionsListItem v-for="answer in answers" :key="answer.id" :answer="answer" />
    </form>
</template>