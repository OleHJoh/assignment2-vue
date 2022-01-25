<script setup>
    //Imports components used in this components view, and functions from other components
    import {useStore} from 'vuex'
    import {computed} from 'vue'
    import { useRouter } from 'vue-router';
    import QuestionsListItem from '../components/QuestionsListItem.vue'

    //Defined global values
    const usersAnswers = []
    const router = useRouter()
    const store = useStore()

    //Function to register the answer from the answer button the user picked for the question
    const handleOnClicked = (index, answer) => {

        //Checks if one of the answers for the questions already exists in the saved answers array
        const found = usersAnswers.findIndex((question => question.index == index))
        console.log(found)
        //If one of the answers already was picked replaces the answer with the new one
        if (found !== -1) {
            usersAnswers[found].answer = answer
        }
        //If the question hadn't been answered before saves the answer they picked
        else {
            usersAnswers.push({
                index, answer
            })
        }
    }

    //Function to submit the answers the user picked to get their score
    const handleOnSubmit = () => {
        
        //Gets the amount of questions from store
        const numberOfQuestions = computed(() => store.getters.getQuestionsSize)
        //Checks if all the questions was answered by checking the amount of answers to number of questions
        if (usersAnswers.length < numberOfQuestions.value) {
            alert("Please answer all the questions")
        }
        //If all questions answered sends the answers they picked to store to get checked if correct
        else {
            //Sort the list so the answer for the first question is first so on to the last one
            usersAnswers.sort((a, b) => a.index - b.index)
            //Sends answers to store
            store.dispatch("setUsersAnswersToResult", usersAnswers)
            //Render the result view
            router.push("/result")
        }
    }  


</script>
<template>
    <ul>
        <!-- Load the questions into the view -->
        <QuestionsListItem @onClicked="handleOnClicked" />
    </ul>
    <hr>
    <!-- Submit button -->
    <div id="submitBtnContainer"><button type="button" @click="handleOnSubmit">Submit</button></div>

</template>