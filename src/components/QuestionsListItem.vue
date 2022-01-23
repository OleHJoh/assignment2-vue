<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'

    const questions = computed(() => store.state.questions)
    const store = useStore()

    defineProps({
        question: {
            type: Object,
            required: true
        }
    })

</script>
<template>
    <li v-for="question in questions" :key="question.id">
        <p>{{question.question}}</p>
        <select name="answers" id="answer">
            <option :value="question.correct_answer" :key="question.id">{{question.correct_answer}}</option>
            <option v-for="answer in question.incorrect_answers" :value="answer" :key="answer.id">{{answer}}</option>
        </select>
    </li>
</template>