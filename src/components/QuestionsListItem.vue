<script setup>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'

    const store = useStore()
    const questions = computed(() => store.state.questions)

    const emit = defineEmits(
        ["onClicked"]
    )

    const onAnswerClick = (index, answer) => {
        emit("onClicked", index, answer)
    }

</script>
<template>

    <li v-for="(question, index) in questions" :key="question">
    <p>{{ question.question }}</p>
    <button v-for="answer in question.answers" :key="answer" @click="onAnswerClick(index, answer)">{{ answer }}</button>
    </li>

</template>