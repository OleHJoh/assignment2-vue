<script setup>
    //Imports components used in this components view, and functions from other components
    import {computed, ref} from 'vue'
    import {useStore} from 'vuex'

    //Defined global values
    //defineEmits is used to send a emit back to the mother view to do an action
    const emit = defineEmits(["onStart"])
    const store = useStore()
    const categories = computed(() => store.state.categories)
    const displayError = ref("")

    //Reset function that gets triggered from a button, if the uses want's to reset
    //the chosen options in the selects for questions they want
    const onResetClick = () => {
        document.getElementById("trivia_amount").value = 10
        document.getElementById("categories").selectedIndex = 0
        document.getElementById("difficulty").selectedIndex = 0
        document.getElementById("type").selectedIndex = 0
    }

    //Start function triggered from a button to start the question quiz
    const onStartClick = async () => {
        const questionsNumber = document.getElementById("trivia_amount").value
        const category = document.getElementById("categories").value
        const difficulty = document.getElementById("difficulty").value
        const type = document.getElementById("type").value   
        
        //Makes a config that will be sent with the fetch request to the api
        let config = []
        config.push(questionsNumber)
        config.push(category)
        config.push(difficulty)
        config.push(type)

        //Error message from api if an error occurred
        const error = await store.dispatch("fetchQuestions", config)
        if(error !== null){
            displayError.value = error
        }



        emit("onStart")
    }


</script>

<template>
    <h3>Choose the questions you want</h3>
    <!-- Number input for the amount of questions, min 1, max 50 -->
    <input type="number" name="trivia_amount" id="trivia_amount" min="1" max="50" value="10">
    <!-- Select option for the user, if they want a specific category -->
    <select name="categories" id="categories">
        <option value="0">any category</option>
        <option v-for="category in categories" :value="category.id" :key="category.id">{{category.name}}</option>
    </select>
    <!-- Select option for the user, if they want a specific difficulty -->
    <select name="difficulty" id="difficulty">
        <option value="0">any difficulty</option>
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
    </select>
    <!-- Select option for the user, if they want a specific type of question -->
    <select name="type" id="type">
        <option value="0">any type</option>
        <option value="multiple">multiple</option>
        <option value="boolean">true / false</option>
    </select>
    <hr>
    <!-- Button container -->
    <div id="selectBtns">
        <button type="button" @click="onResetClick">Reset</button>
        <button type="button" @click="onStartClick">Start Quiz</button>
    </div>
    <!-- Error message display box -->
    <div v-if="displayError">
        <p>{{ displayError }}</p>
    </div>
</template>