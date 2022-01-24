<script setup>
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'
    import SelectQuestion from '../components/SelectQuestions.vue'
    import QuestionsList from '../components/QuestionsList.vue'

    const router = useRouter()
    const store = useStore()

    const handleStart = () => {
        chooseQuestions.value = false
        showQuestions.value = true   
    }

/*     const handleOnSubmit = (usersAnswers) => {
        router.push("/result", usersAnswers)
    } */

</script>

<template>
    <h1>Questions</h1>
    <QuestionsList />
</template>