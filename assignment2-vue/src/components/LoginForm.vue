<script setup>
import { ref } from 'vue';

const emit = defineEmits(["onLogin"])

const username = ref("")
const displayError = ref("")

const onSubmit = () => {
    console.log(username.value)

    if (!username.value) {
        displayError.value = "Please enter your username!"
    } else {
        emit("onLogin", username.value)
    }
}

</script>

<template>

    <h3>Login Form</h3>
    <form @submit.prevent="onSubmit">
        <input type="text" placeholder="e.g., johndoe .." v-model.trim="username" />
        <button type="submit">Login</button>
    </form>

    <div v-if="displayError">
        <p>{{ displayError }}</p>
    </div>
    
</template>