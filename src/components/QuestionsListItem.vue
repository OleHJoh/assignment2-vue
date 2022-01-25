<script setup>
    //Imports components functions from other components
    import {computed} from 'vue'
    import {useStore} from 'vuex'

    //Defined global values
    const store = useStore()
    const questions = computed(() => store.state.questions)
    const emit = defineEmits(
        ["onClicked"]
    )

    //Function for when one of the answers are clicked, and says so to the mother view
    const onAnswerClick = (index, answer) => {
        emit("onClicked", index, answer)
    }

</script>
<template>
    <!-- li tags that gets rendered into the mother view -->
    <!-- Has a vue for loop to generate all the questions and a loop for the answers for the question in mind -->
    <li v-for="(question, index) in questions" :key="question">
    <p>{{ question.question }}</p>
    <button v-for="answer in question.answers" :key="answer" @click="onAnswerClick(index, answer)">{{ answer }}</button>
    </li>

</template>