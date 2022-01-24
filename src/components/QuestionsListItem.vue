<script setup>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'


    defineProps({
        /*answer: {
            type: Object,
            required: true
        },*/
        question: {
            type: String,
            required: true
        }
    })

    const store = useStore()
    const correct = computed(() => store.getters.getCorrectAnswers)
    const incorrects = computed(() => store.getters.getIncorrectAnswers)
    


    const instance = ref(0)

    const onAnswerClick = () => {
        instance.value = instance.value + 1
        answers = [correct[instance.value], incorrects[instance.value]]
        
    }

    /*<input v-bind:value="answer">
    <label>{{answer}}</label>
    <br>*/


</script>
<template>

    <li v-show="instance === question.index" >
        {{ question.question }}
        {{ question.correct_answer }}
        {{ question.incorrect_answers}}

    <!--p>{{ question.question }}</!--p-->
    <!-- pass in the current index to know for which question the answer is -->
    <button v-for="answer in answers" :key="answer" @click="onAnswerClick(index, answer)">{{ answer }}</button>
    </li>
    
</template>