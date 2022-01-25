<script setup>
//Imports components used in this components view, and functions from other components
import { ref } from 'vue';
import { useStore } from 'vuex';

//Defined global values
//defineEmits is used to send a emit back to the mother view to do an action
const emit = defineEmits(["onLogin"])
const store = useStore()
const username = ref("")
const displayError = ref("")

//onSubmit is called from a button click
//Its async since it waits a complete notice from store
const onSubmit = async () => {
    //Error message if the user didn't enter an username
    if (!username.value) {
        displayError.value = "Please enter your username!"
    } else {
        //If an username was entered sends the value to store to register the in the api
        const error = await store.dispatch("userLogin", username.value)
        //Error message from api if error occurred
        if (error !== null) {
            displayError.value = error
        }
        emit("onLogin")
    }
}

</script>

<template>

    <h3>Login Form</h3>
    <!-- Show's a login form in the view -->
    <form @submit.prevent="onSubmit">
        <input type="text" placeholder="e.g., johndoe .." v-model.trim="username" />
        <button type="submit">Login</button>
    </form>
    <!-- Error message display box -->
    <div v-if="displayError">
        <p>{{ displayError }}</p>
    </div>
    
</template>