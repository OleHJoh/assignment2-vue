<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import QuestionsListItem from '../components/QuestionsListItem.vue'

const store = useStore()
const questions = computed(() => store.state.questions)
</script>
<template>
    <ul>
        <QuestionsListItem />
    </ul>
    <button type="button">Reset</button>
    <button type="button">Confirm</button>
</template>