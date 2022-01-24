<script setup>
    import {computed, ref} from 'vue'
    import {useStore} from 'vuex'

    const emit = defineEmits(["onStart"])
    const store = useStore()
    const categories = computed(() => store.state.categories)

    const displayError = ref("")

    const onResetClick = () => {
        document.getElementById("trivia_amount").value = 10
        document.getElementById("categories").selectedIndex = 0
        document.getElementById("difficulty").selectedIndex = 0
        document.getElementById("type").selectedIndex = 0
    }

    const onStartClick = async () => {
        const questionsNumber = document.getElementById("trivia_amount").value
        const category = document.getElementById("categories").value
        const difficulty = document.getElementById("difficulty").value
        const type = document.getElementById("type").value   
        
        let config = []
        config.push(questionsNumber)
        config.push(category)
        config.push(difficulty)
        config.push(type)

        const error = await store.dispatch("fetchQuestions", config)
        if(error !== null){
            displayError.value = error
        }



        emit("onStart")
    }


</script>

<template>
    <h3>Choose the questions you want</h3>
    <input type="number" name="trivia_amount" id="trivia_amount" min="1" max="50" value="10">

    <select name="categories" id="categories">
        <option value="0">any category</option>
        <option v-for="category in categories" :value="category.id" :key="category.id">{{category.name}}</option>
    </select>
    <select name="difficulty" id="difficulty">
        <option value="0">any difficulty</option>
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
    </select>
    <select name="type" id="type">
        <option value="0">any type</option>
        <option value="multiple">multiple</option>
        <option value="boolean">true / false</option>
    </select>
    <hr>
    <div id="selectBtns">
        <button type="button" @click="onResetClick">Reset</button>
        <button type="button" @click="onStartClick">Start Quiz</button>
    </div>
    <div v-if="displayError">
        <p>{{ displayError }}</p>
    </div>
</template>