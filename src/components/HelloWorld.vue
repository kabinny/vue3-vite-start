<script setup>
// import { defineProps } from 'vue'

const props = defineProps(['foo', 'bar'])
</script>

<template>
  <div>{{ props.foo }}</div>
  <div>{{ props.bar }}</div>
  <hr />
</template>

<style scoped></style>
