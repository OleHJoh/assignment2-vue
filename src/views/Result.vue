<script setup>
import {useStore} from 'vuex'
import { useRouter } from 'vue-router';
import { onMounted, ref } from '@vue/runtime-core';
import SelectQuestions from '../components/SelectQuestions.vue';

    const router = useRouter()
    const store = useStore()

    const result = ref(true)
    const chooseQuestions = ref(false)

    onMounted(async () => {
        await store.dispatch("fetchCategories")
    })

    const onTryAgain = () => {
        chooseQuestions.value = true
        result.value = false
    }

    const onLogout = () => {
        router.push("/")
    }

    const handleStart = () => {
        router.push("/questions")
    }

</script>

<template>
    <h1>Result</h1>
    <div v-if="result">
        <button type="button" @click="onTryAgain">Try Again</button>
        <button type="button" @click="onLogout">Logout</button>
    </div>
    <SelectQuestions v-if="chooseQuestions" @onStart="handleStart" />
</template>