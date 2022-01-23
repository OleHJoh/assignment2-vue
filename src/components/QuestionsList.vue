<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import QuestionsListItem from '../components/QuestionsListItem.vue'

const store = useStore()
const questionsList = computed(() => store.state.questions)
</script>
<template>
    <h4>QuestionsList</h4>
    <ul>
        <QuestionsListItem v-for="question in questionsList" :key="question.id" :question="question"/>
    </ul>
</template>