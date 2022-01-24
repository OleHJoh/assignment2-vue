<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
import { useRouter } from 'vue-router';
import QuestionsListItem from '../components/QuestionsListItem.vue'

    const usersAnswers = []

    const handleOnClicked = (index, answer) => {

        const found = usersAnswers.findIndex((question => question.index == index))
        console.log(found)
        if (found !== -1) {
            usersAnswers[found].answer = answer
        } else {
            usersAnswers.push({
                index, answer
            })
        }
    }

    const router = useRouter()
    const store = useStore()

    const handleOnSubmit = () => {
        
        const numberOfQuestions = computed(() => store.getters.getQuestionsSize)

        if (usersAnswers.length < numberOfQuestions.value) {
            alert("Please answer all the questions")
        } else {
            usersAnswers.sort((a, b) => a.index - b.index)
            store.dispatch("setUsersAnswersToResult", usersAnswers)
            router.push("/result")
        }
    }  


</script>
<template>
    <ul>
        <QuestionsListItem @onClicked="handleOnClicked" />
    </ul>
    <hr>
    <div id="submitBtnContainer"><button type="button" @click="handleOnSubmit">Submit</button></div>

</template>