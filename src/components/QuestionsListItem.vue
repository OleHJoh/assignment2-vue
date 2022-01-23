<script setup>
import { onMounted } from "@vue/runtime-core"

    defineProps({
        question: {
            type: Object,
            required: true
        }
    })

    let answers = []

    function checkQuestionType(){
        if(question.type === "boolean"){
            answers.push(question.correct_answer)
            answers.push(question.incorrect_answers[0])
        }
        if(question.type === "multiple"){
            for(let i = 0; i < question.incorrect_answers.length; i++){
                answers.push(question.incorrect_answers[i])
            }
        }
        for(let i = 0; i < answers.length; i++){
        const html = `
            <option value="${i}">
            ${answers[i]}
            </option>
        `   
        answer.insertAdjacentHTML("beforeend", html)
    };
    }

    onMounted(() => {
        checkQuestionType()
    })

</script>
<template>
    <li>
        <p id="{question.correct_answer}">{{question.question}}</p>
        <select name="answers" id="answer">
        </select>
    </li>
</template>