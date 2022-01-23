<script setup>
    import { onMounted } from '@vue/runtime-core'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'
    import SelectQuestion from '../components/SelectQuestions.vue'
    import QuestionsList from '../components/QuestionsList.vue'

    const router = useRouter()
    const store = useStore()

    onMounted(async () => {
        await store.dispatch("fetchQuestions")
        await store.dispatch("fetchCategories")
    })

</script>

<template>
    <h1>Questions</h1>
    <SelectQuestion v-show="true"/>
    <QuestionsList v-show="false"/>
</template>