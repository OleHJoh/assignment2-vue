<script setup>
import {computed, onMounted, ref} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

const questions = computed(() => store.state.questions)
const usersAnswers = computed(() => store.state.usersAnswers)
const highScore = computed(() => store.state.highScore)
const score = ref("")

onMounted( async () => {

    const numberOfQuestions = computed(() => store.getters.getQuestionsSize)
    let correctAnswers = 0;
    console.log(numberOfQuestions.value)

    for (let i = 0; i < numberOfQuestions.value; i++) {
        if (usersAnswers.value[i].answer === questions.value[i].correct_answer) {
            correctAnswers++;
        }
    }
    score.value = correctAnswers*10

    if (score.value > highScore.value) {
        await store.dispatch("updateHighScore", score.value)
    }
})


</script>

<template>
    <h1>Results</h1>
    <li v-for="(question, index) in questions" :key="question">
        <p>Your answer: {{ usersAnswers[index].answer }}</p>
        <p>Correct answer: {{ question.correct_answer }}</p>
    </li><br>

    <p>You got: {{ score }} points</p>
</template>
