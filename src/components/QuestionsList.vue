<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
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

        console.log(usersAnswers)
    }

    const handleOnSubmit = () => {
        usersAnswers.sort((a, b) => a.index - b.index)
        console.log(usersAnswers)
    }  


</script>
<template>
    <ul>
        <QuestionsListItem @onClicked="handleOnClicked" />
    </ul>
    <button type="button" @click="handleOnSubmit">Submit</button>

</template>