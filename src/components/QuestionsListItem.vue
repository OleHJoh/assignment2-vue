<script setup>
    defineProps({
        question: {
            type: Object,
            required: true
        }
    })

</script>
<template>
    <li>
        <p>{{question.question}}</p>
    </li>
</template>