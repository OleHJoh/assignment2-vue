<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const emit = defineEmits(["onLogin"])
const store = useStore()

const username = ref("")
const displayError = ref("")


const onSubmit = async () => {

    if (!username.value) {
        displayError.value = "Please enter your username!"
    } else {
        const error = await store.dispatch("saveUsername", username.value)
        if (error !== null) {
            displayError.value = error
        }
        emit("onLogin")
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
<template>
    
</template>