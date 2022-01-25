<script setup>
//Imports all the components used on the view, and functions used from components
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import LoginForm from '../components/LoginForm.vue';
import SelectQuestions from '../components/SelectQuestions.vue';

//Creates global values to be used in the script
//Sets connection to router and the store
const router = useRouter()
const chooseQuestions = ref(false)
const login = ref(true)
const store = useStore()

//When the view gets loaded it activates onMounted to run the function
//dispatch to store, so store runs the function fetchCategories
onMounted(async () => {
        await store.dispatch("fetchCategories")
    })

//A handler that determents when the different components in view will show
const handleOnLogin = () => {
    chooseQuestions.value = true
    login.value = false
}

//Handler for when the user have chosen the questions they want take them to the quiz form
const handleStart = () => {
    //Render the quiz view
    router.push("/questions")
}

</script>


<template>
    <h1>Login</h1>
    <hr>
    <!-- Loads the different components into the view -->
    <LoginForm v-if="login" @onLogin="handleOnLogin" />
    <SelectQuestions v-if="chooseQuestions" @onStart="handleStart" />
</template>