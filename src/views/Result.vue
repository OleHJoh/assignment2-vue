<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from '@vue/runtime-core';
import SelectQuestions from '../components/SelectQuestions.vue';
import ResultQuestions from '../components/ResultQuestions.vue';

    const router = useRouter()

    const result = ref(true)
    const chooseQuestions = ref(false)

    onMounted(async () => {
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
    <ul>
        <ResultQuestions />
    </ul>
    <hr>
    <div v-if="result">
        <button type="button" @click="onTryAgain">Try Again</button>
        <button type="button" @click="onLogout">Logout</button>
    </div>
    <SelectQuestions v-if="chooseQuestions" @onStart="handleStart" />
</template>