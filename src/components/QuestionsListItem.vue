<script setup>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'

    const store = useStore()
    const questions = computed(() => store.state.questions)
    console.log(questions.value)

    const emit = defineEmits(
        ["onClicked"],
        ["onSubmit"]
    )

    const onAnswerClick = (index, answer) => {
        emit("onClicked", index, answer)
    }

    const onSubmitClick = () => {
        emit("onSubmit")
    }

</script>
<template>

    <li v-for="(question, index) in questions" :key="question">
    <p>{{ question.question }}</p>
    <!-- pass in the current index to know for which question the answer is -->
    <button v-for="answer in question.answers" :key="answer" @click="onAnswerClick(index, answer)">{{ answer }}</button>
    </li>
    
    <button @click="onSubmitClick">Submit the answers</button>

</template>