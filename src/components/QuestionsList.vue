<script setup>
import {computed, ref, onRenderTriggered} from 'vue'
import {useStore} from 'vuex'
import QuestionsListItem from '../components/QuestionsListItem.vue'

    const store = useStore()
    const questions = computed(() => store.getters.getQuestions)

    //let instance = ref(0)



    //const answers = [...correct, ...incorrect]

    let score = 0
    //let answers = []
    //let correct = ""

    const onSubmit = () => {

    }



    /*const convertAnswers = () => {

        answers.push(questions[instance].correct_answer)
        answers.push(questions[instance].incorrect_answers)
        correct = answers[0]
        console.log(correct)
    }*/

</script>
<template>

    <ul>
        <QuestionsListItem
            v-for="question in questions"
            :key="question.id"
            :question="question" />
    </ul>


    <!--p>{{questions[instance].questions}}</!--p-->
    <!--form>
        <QuestionsListItem v-for="answer in answers" :key="answer.id" :answer="answer" />
    </!form-->
</template>