<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  PropsData: {
    type: Number,
    required: true,
    default: 0,
  },
})

// const emits = defineEmits(['IncreaseOne'])
const emits = defineEmits({
  IncreaseOne: null,
})
</script>

<template>
  <button @click="$emit('IncreaseOne')">{{ props.PropsData }}</button>
</template>

<style scoped></style>
