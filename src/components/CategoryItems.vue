<script setup>
    defineProps({
        category: {
            type: Object,
            required: true
        }
    })

</script>
<template>
    <option value="{category.id}">{{category.name}}</option>
</template>