<script setup>
import { ref } from 'vue'

let text = ref('원본 값')

const textInput = (event) => {
  console.log(event)

  text.value = event.target.value
}
</script>

<template>
  <input :value="text" type="text" @input="textInput" />
  <p>{{ text }}</p>
</template>

<style scoped></style>
