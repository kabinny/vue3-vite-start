<script setup>
// import { defineProps } from 'vue'

const props = defineProps(['propsData'])
</script>

<template>
  <div>{{ props.propsData }}</div>
  <hr />
</template>

<style scoped></style>
