<script setup>
// import { defineProps } from 'vue'

const props = defineProps({
  PropsData: {
    type: Number,
    required: true,
    default: 0,
    validator(props) {
      return props > 5
    },
  },
})
</script>

<template>
  <div>{{ props.PropsData }}</div>
  <hr />
</template>

<style scoped></style>
