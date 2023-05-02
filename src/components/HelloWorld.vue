<script setup>
// import { defineProps } from 'vue'

const props = defineProps({
  BooleanData: Boolean,
})
console.log(props.BooleanData)
</script>

<template>
  <div>{{ props.BooleanData }}</div>
  <hr />
</template>

<style scoped></style>
