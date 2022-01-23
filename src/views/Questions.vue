<script setup>
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'
    import SelectQuestion from '../components/SelectQuestions.vue'
    import QuestionsList from '../components/QuestionsList.vue'

    const router = useRouter()
    const store = useStore()
    const chooseQuestions = ref(true)
    const showQuestions = ref(false)

    onMounted(async () => {
        await store.dispatch("fetchCategories")
    })

    const handleStart = () => {
        chooseQuestions.value = false
        showQuestions.value = true
        
    }

</script>

<template>
    <h1>Questions</h1>
    <SelectQuestion v-if="chooseQuestions" @onStart="handleStart"/>
    <QuestionsList v-if="showQuestions"/>
</template>