<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import QuestionsListItem from '../components/QuestionsListItem.vue'


    let score = 0
    let instance = 0
    let correct = ""

    const onSubmit = () => {

    }

</script>
<template>
    <ul>
        <QuestionsListItem />
    </ul>
</template>