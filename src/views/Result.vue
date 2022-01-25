<script setup>
    //Imports all the components used on the view, and functions used from components
    import { useRouter } from 'vue-router';
    import { ref } from '@vue/runtime-core';
    import SelectQuestions from '../components/SelectQuestions.vue';
    import ResultQuestions from '../components/ResultQuestions.vue';
    import { useStore } from 'vuex';

    //Defined global values
    const router = useRouter()
    const store = useStore()
    const result = ref(true)
    const chooseQuestions = ref(false)

    //Function for letting the user try the quiz again, triggered by a button
    const onTryAgain = () => {
        chooseQuestions.value = true
        result.value = false
    }

    //Function for logging out the user, triggered by button
    const onLogout = () => {
        //Resets the stored data for user in the store
        store.commit("setUsername", "")
        store.commit("setHighScore", 0)
        store.commit("setUserId", 0)
        //Renders the login view
        router.push("/")
    }

    //Function for shoeing the question quiz to the user, triggered by button
    const handleStart = () => {
        //Renders the quiz view
        router.push("/questions")
    }

</script>

<template>
    <ul>
        <!-- Loads the result component into the view -->
        <ResultQuestions />
    </ul>
    <hr>
    <!-- Button display container -->
    <div v-if="result">
        <button type="button" @click="onTryAgain">Try Again</button>
        <button type="button" @click="onLogout">Logout</button>
    </div>
    <!-- Loads the component for choices the user might have for questions -->
    <SelectQuestions v-if="chooseQuestions" @onStart="handleStart" />
</template>