<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import LoginForm from '../components/LoginForm.vue';
import SelectQuestions from '../components/SelectQuestions.vue';

const router = useRouter()
const chooseQuestions = ref(false)
const login = ref(true)
const store = useStore()

onMounted(async () => {
        await store.dispatch("fetchCategories")
    })

const handleOnLogin = () => {
    chooseQuestions.value = true
    login.value = false
}

const handleStart = () => {
    router.push("/questions")
}

</script>


<template>
    <h1>Login</h1>
    <LoginForm v-if="login" @onLogin="handleOnLogin" />
    <SelectQuestions v-if="chooseQuestions" @onStart="handleStart" />
</template>