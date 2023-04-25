<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const calculated = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val
  },
})
const computedSetter = () => {
  calculated.value = 10
}
</script>

<template>
  <div>count: {{ count }}</div>
  <div>calculated: {{ calculated }}</div>

  <button @click="computedSetter">click!</button>
</template>

<style scoped></style>
