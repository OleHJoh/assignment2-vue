<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'

    defineProps({
        answer: {
            type: Object,
            required: true
        }
    })

</script>
<template>
    <input type="radio" v-bind:value="answer">
    <label>{{answer}}</label>
    <br>
</template>