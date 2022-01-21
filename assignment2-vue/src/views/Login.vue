<script setup>
import { useRouter } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';

const router = useRouter()

const handleOnLogin = () => {
    router.push("/questions")
}

</script>


<template>
    <h1>Login</h1>
    <LoginForm @onLogin="handleOnLogin" />
</template>