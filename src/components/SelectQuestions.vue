<script setup>
    import {computed} from 'vue'
    import {useStore} from 'vuex'
    import CategoryItems from "./CategoryItems.vue";

    const store = useStore()
    const categories = computed(() => store.state.categories)

</script>

<template>
    <select name="categories" id="categories">
        <CategoryItems v-for="category in categories" :key="category.id" :category="category"/>
    </select>
</template>