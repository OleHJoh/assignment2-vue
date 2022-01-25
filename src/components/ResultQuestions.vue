<script setup>
    //Imports components functions from other components
    import {computed, onMounted, ref} from 'vue'
    import {useStore} from 'vuex'

    //Defined global values
    const store = useStore()
    const questions = computed(() => store.state.questions)
    const usersAnswers = computed(() => store.state.usersAnswers)
    const highScore = computed(() => store.state.highScore)
    const score = ref("")

    //Function triggered when component gets loaded
    onMounted( async () => {
        //Gets the number of questions answered from the store
        const numberOfQuestions = computed(() => store.getters.getQuestionsSize)
        let correctAnswers = 0;
        console.log(numberOfQuestions.value)

        //For loop for checking of the answer the user choice was the correct one
        for (let i = 0; i < numberOfQuestions.value; i++) {
            //Checks if the answer was correct
            if (usersAnswers.value[i].answer === questions.value[i].correct_answer) {
                //If correct correctAnswers value increases
                correctAnswers++;
            }
        }
        //Increases the score value by times 10
        score.value = correctAnswers*10

        //Checks if the current score is higher then the previous highscore
        if (score.value > highScore.value) {
            //If the current score was greater updates the highscore in the user api
            await store.dispatch("updateHighScore", score.value)
        }
    })


</script>

<template>
    <h1>Results</h1>
    <!-- Vue for loop to print out the question and it's correct answer, and the answer the user picked -->
    <li v-for="(question, index) in questions" :key="question">
        <p>Your answer: {{ usersAnswers[index].answer }}</p>
        <p>Correct answer: {{ question.correct_answer }}</p>
    </li><br>

    <p>You got: {{ score }} points</p>
</template>
