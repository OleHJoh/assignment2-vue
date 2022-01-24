<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
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

/*     const emit = defineEmits(
        ["onSubmit"]
    ) */
    const router = useRouter()
    const handleOnSubmit = () => {
        usersAnswers.sort((a, b) => a.index - b.index)
        //emit("onSubmit", usersAnswers)
        router.push("/result", usersAnswers)
    }  


</script>
<template>
    <ul>
        <QuestionsListItem @onClicked="handleOnClicked" />
    </ul>
    <hr>
    <div id="submitBtnContainer"><button type="button" @click="handleOnSubmit">Submit</button></div>

</template>