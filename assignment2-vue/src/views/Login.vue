<script setup>
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import LoginForm from '../components/LoginForm.vue';

const router = useRouter()
const store = useStore()

// expects username returned from LoginForm
const handleOnLogin = (username) => {
    
    store.dispatch("saveUsername", username)
    router.push("/questions")
}

</script>


<template>
    <h1>Login</h1>
    <LoginForm @onLogin="handleOnLogin" />
</template>