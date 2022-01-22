<script setup>
    import {useRouter} from 'vue-router'
    import SelectQuestion from '../components/SelectQuestions.vue'

    const router = useRouter()



</script>

<template>
    <h1>Questions</h1>
    <SelectQuestion />
</template>